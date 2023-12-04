import { Router } from 'express';
import UserController from '../../Controllers/user.controller.js';
import { authenticateToken } from '../../Controllers/auhentication.controller.js';

export default Router()
  .post('/', UserController.createUser)
  .post('/login', UserController.LoginUser)
  .get('/:userId', UserController.getUserById)
  .put('/:userId', UserController.updateUser)
  .delete('/:userId', UserController.deleteUser);
