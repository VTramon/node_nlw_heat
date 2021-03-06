import { Request, Response } from 'express';
import { AuthenticateUserMobileService } from '../services/AuthenticateUserServiceMobile';

class AuthenticateUserControllerMobile {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserMobileService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (error) {
      return response.json(error.message);
    }
  }
}

export { AuthenticateUserControllerMobile };
