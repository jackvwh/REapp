import { Router } from 'express';
import UserController from '../../Controllers/user.controller.js';
import { authenticateToken } from '../../Controllers/auhentication.controller.js'; 

export default Router()
  
  .post('/', UserController.createUser)
  .get('/profile', authenticateToken, UserController.getUserProfile)
  .post('/login', UserController.LoginUser)
  .post('/logout', UserController.Logout)
  .get('/:userId', UserController.getUserById)
  .put('/:userId', UserController.updateUser)
  .delete('/:userId', UserController.deleteUser);
