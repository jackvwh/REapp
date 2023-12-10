import { Router } from "express";
import CalenderController from "../../Controllers/calender.controller.js";

export default Router()
.get('/', CalenderController.getAllEvents)