import express from 'express';
import { AdminLogin, Login, Register } from '../controllers/AuthController.js';
import { VerifyEmail } from '../utils/verifyEmail.js';
import { forgetPassword, resetPassword } from '../controllers/ForgetPass.js';



const router = express.Router();

router.post('/register', Register)
router.get('/verify', VerifyEmail); 
router.post('/login', Login)
router.post('/admin/login', AdminLogin)

router.post("/forgetPassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);


export default router