import { Router } from 'express';
import { AuthenticateUserControllerMobile } from './controllers/AuthenticateUserControllerMobile';
import { AuthenticateUserControllerWeb } from './controllers/AuthenticateUserControllerWeb';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GeatLast3MessagesController } from './controllers/GeatLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate/web', new AuthenticateUserControllerWeb().handle);

router.post(
  '/authenticate/mobile',
  new AuthenticateUserControllerMobile().handle
);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get('/messages/last3', new GeatLast3MessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
