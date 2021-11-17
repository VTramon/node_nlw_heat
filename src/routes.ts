import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GeatLast3MessagesController } from './controllers/GeatLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle,
);

router.get('/messages/last3', new GeatLast3MessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
