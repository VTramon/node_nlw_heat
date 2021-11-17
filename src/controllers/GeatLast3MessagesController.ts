import { Response, Request } from 'express';
import { GeatLast3MessagesService } from '../services/GeatLast3MessagesService';

class GeatLast3MessagesController {
  async handle(request: Request, response: Response) {
    const service = new GeatLast3MessagesService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GeatLast3MessagesController };
