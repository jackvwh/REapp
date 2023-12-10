import ActivityModels from '../Models/calender.model.js';


export default class CalenderController {
    static async getAllEvents(req, res) {
        try {
            const userId = req.user.id; // Assuming you have user id in request after authentication
            const events = await EventModel.getEventsByUserId(userId);
            res.json(events);
        } catch (err) {
            res.status(500).send('Server error');
        }




    }
}
;