import { Router } from 'express';
import UserController from '../../controllers/user.controller.js';

export default Router()
  .post('/', UserController.createUser)
  .put('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser);
