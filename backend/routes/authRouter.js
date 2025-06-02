import { Router } from 'express';
import { register, login, logout, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/me', protect, getMe);

export default authRouter;
