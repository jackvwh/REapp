import { Router } from 'express';
import UserController from '../../Controllers/user.controller.js';

export default Router()
  .post('/', UserController.createUser)
  .get('/:userId', UserController.getUserById)
  .put('/:userId', UserController.updateUser)
  .delete('/:userId', UserController.deleteUser);
