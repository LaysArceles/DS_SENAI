
import express from 'express';
import AuthController from '../controllers/AuthControllers.ts';

const route = express.Router();

route.post('/register', AuthController.register);
route.post('/login', AuthController.login);

export default route;