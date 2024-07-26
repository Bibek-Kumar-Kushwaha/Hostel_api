import express from 'express';
import { registerController } from '../Controllers/userController.js';
const router = express.Router();

router.get('/register',registerController);

export default router;
