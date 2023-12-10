import { Router } from "express";
import CalenderController from "../../Controllers/calender.controller.js";

export default Router()
.get('/', CalenderController.getAllEvents)
.put('/events/:eventId', CalenderController.updateEvent)
.post('/events', CalenderController.addEvent)
.delete('/events/:eventId', CalenderController.deleteEvent);