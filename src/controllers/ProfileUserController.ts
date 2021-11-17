import { Response, Request } from 'express';
import { GeatLast3MessagesService } from '../services/GeatLast3MessagesService';
import { ProfileUserService } from '../services/ProfileUserServoce';

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new ProfileUserService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { ProfileUserController };
