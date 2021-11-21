import { Request, Response } from 'express';
import { AuthenticateUserWebService } from '../services/AuthenticateUserServiceWeb';

class AuthenticateUserControllerWeb {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserWebService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (error) {
      return response.json(error.message);
    }
  }
}

export { AuthenticateUserControllerWeb };
