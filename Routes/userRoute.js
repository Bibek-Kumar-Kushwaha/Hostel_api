import express from 'express';
import { loginController, logoutController, registerController } from '../Controllers/userController.js';
const router = express.Router();

router.post('/register',registerController);
router.post('/login',loginController);
router.post('/logout',logoutController);

export default router;
