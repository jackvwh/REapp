import EventModel from '../Models/calender.model.js';


export default class CalenderController {
    static async getAllEvents(req, res) {
        try {
            // const userId = req.user.id; // Assuming you have user id in request after authentication
            const events = await EventModel.getEventsByUserId(userId);
            res.json(events);
        } catch (err) {
            res.status(500).send('Server error');
        }
    }
    static async addEvent(req, res) {
        try {
            const { start, end, text } = req.body;
            const userId = req.user.id; // Assuming this is obtained from authenticated user
            const eventId = await EventModel.addEvent(userId, start, end, text);
            res.status(201).json({ eventId });
        } catch (err) {
            res.status(500).send('Server error');
        }
    }
    static async deleteEvent(req, res) {
        try {
            const { eventId } = req.params;
            const userId = req.user.id; // Assuming this is obtained from authenticated user
            await EventModel.deleteEvent(eventId, userId);
            res.status(204).send();
        } catch (err) {
            res.status(500).send('Server error');
        }
    }

    static async updateEvent(req, res) {
        try {
            const { eventId } = req.params;
            const { start, end, text } = req.body;
            const userId = req.user.id; // Assuming this is obtained from authenticated user
    
            await EventModel.updateEvent(eventId, userId, start, end, text);
            res.status(200).json({ message: 'Event updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while updating the event: ' + error });
        }
    }

}
