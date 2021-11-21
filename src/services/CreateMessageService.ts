import prismaClient from '../prisma';
import { webIo, mobileIo } from '../app';

class CreateMessageService {
  async execute(text: string, user_id: string) {
    try {
      const message = await prismaClient.message.create({
        data: {
          text,
          user_id,
        },
        include: {
          user: true,
        },
      });

      const infoWS = {
        text: message.text,
        user_id: message.user_id,
        created_at: message.created_at,
        user: {
          name: message.user.name,
          avatar_url: message.user.avatar_url,
        },
      };

      webIo.emit('new_message', infoWS);
      mobileIo.emit('new_message', infoWS);

      return message;
    } catch (error) {
      return console.log(error);
    }
  }
}

export { CreateMessageService };
