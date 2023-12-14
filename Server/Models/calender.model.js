import query from '../Db/query.js';

class CalenderModels {
  static async getEventsByUserId(userId) {
    const sql = 'SELECT * FROM calender_events WHERE profile_id = ?';
    try {
      const result = await query(sql, [userId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async addEvent(userId, start, end, text) {
    const sql =
      'INSERT INTO calender_events (profile_id, start, end, text) VALUES (?, ?, ?, ?)';
    try {
      const result = await query(sql, [userId, start, end, text]);
      return result.insertId; // Returns the ID of the newly created event
    } catch (err) {
      throw err;
    }
  }

  static async deleteEvent(eventId, userId) {
    try {
      await query(
        'DELETE FROM calender_events WHERE event_id = ? AND profile_id = ?',
        [eventId, userId]
      );
      return;
    } catch (err) {
      throw err;
    }
  }

  static async updateEvent(eventId, userId, start, end, text) {
    const sql = `
        UPDATE calender_events 
        SET start = ?, end = ?, text = ?
        WHERE event_id = ? AND profile_id = ?;
    `;
    try {
      await query(sql, [start, end, text, eventId, userId]);
    } catch (error) {
      console.error('Error updating event', error);
      throw new Error(error);
    }
  }
}

export default CalenderModels;
