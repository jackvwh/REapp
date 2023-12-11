import { Router } from 'express';
import CalenderController from '../../Controllers/calender.controller.js';
import { authenticateToken } from '../../Controllers/auhentication.controller.js';

export default Router()
  .get('/', authenticateToken, CalenderController.getAllEvents)
  .put('/events/:eventId', authenticateToken, CalenderController.updateEvent)
  .post('/events', authenticateToken, CalenderController.addEvent)
  .delete('/events/:eventId', authenticateToken, CalenderController.deleteEvent);
