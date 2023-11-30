import { Router } from 'express';
import UserController from '../../Controllers/user.controller.js';

export default Router()
  .post('/', UserController.createUser)
  .put('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser);
