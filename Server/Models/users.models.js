import query from '../Db/query.js';
import bcrypt from 'bcrypt';

class UserModels {
  static async ValidateUser(username, password) {
    const sql = `SELECT * FROM user_profiles WHERE username = ?`;

    try {
      const result = await query(sql, [username]);
      //maybe check for multiple users and return an error
      if (result.length > 0) {
        const user = result[0];
        //compare hashed password with the hashed passowrd in the DB
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) return user;
      }
      return null;
    } catch (error) {
      console.error('Error validating user', error);
    }
  }
  static async getUserById(profile_id) {
    console.log('%d', profile_id);
    const sql = `SELECT 
        user_profiles.*,
        activities.*,
        user_activities.*
      FROM 
        user_profiles
          LEFT JOIN user_activities ON user_profiles.profile_id = user_activities.profile_id
          LEFT JOIN activities ON user_activities.activity_id = activities.activity_id
      WHERE user_profiles.profile_id = ?;

      `;
    try {
      const result = await query(sql, [profile_id]);
      if (result.length === 0) {
        throw new Error('User not found');
      }
      // convert the flat array of objects to a user objects with nested activities
      const user = {
        profileId: result[0].profile_id || Number(profile_id),
        username: result[0].username,
        password: result[0].password,
        firstName: result[0].first_name,
        lastName: result[0].last_name,
        email: result[0].email,
        birthdate: result[0].birthdate,
        activities: [],
      };
      while (
        result.length > 0 &&
        result[0].activity_id !== null &&
        result[0].activity_id !== null
      ) {
        const activity = {
          activityId: result[0].activity_id,
          activityType: result[0].activity_type,
        };
        user.activities.push(activity);
        result.shift();
      }
      return user;
    } catch (error) {
      console.error('error getting user', error);
      throw new Error(error);
    }
  }

  static async updateUserPrivilege(username, privilege) {
    const sql = `UPDATE user_profiles SET privilege = ? WHERE username = ?;`;
    try {
      const result = await query(sql, [privilege, username]);
      console.log(`User privilege updated for ${username}`);
      return result;
    } catch (error) {
      console.error('Error updating user privilege:', error);
      throw new Error('Error updating user privilege');
    }
  }

  static async createUser(
    username,
    password,
    first_name,
    last_name,
    email,
    birthdate,
    privilege
  ) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = ` 
        START TRANSACTION;
        
        INSERT INTO user_profiles (username, password, first_name, last_name, email, birthdate, privilege)
        VALUES (?, ?, ?, ?, ?, ?, (SELECT id FROM priviliges WHERE title = ?));
        
        COMMIT;
      `;
    const params = [
      username,
      hashedPassword,
      first_name,
      last_name,
      email,
      birthdate,
      privilege,
    ];
    try {
      const result = await query(sql, params);
      console.log(`User ${username} created`);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error(error);
    }
  }

  static async updateUser(
    profileId,
    username,
    password,
    first_name,
    last_name,
    email,
    birthdate,
    activities
  ) {
    const formattedBirthdate = new Date(birthdate).toISOString().slice(0, 10);
    const sql = `

        START TRANSACTION;
    
        UPDATE user_profiles 
        SET username = ?, password = ?, first_name = ?, last_name = ?, email = ?, birthdate = ?
        WHERE profile_id = ?;
        
        DELETE FROM user_activities WHERE profile_id = ?;
        
        INSERT INTO user_activities (profile_id, activity_id) 
        SELECT ?, activity_id FROM activities WHERE activity_type IN (?);
    
        COMMIT;
      `;

    try {
      const results = await query(sql, [
        username,
        password,
        first_name,
        last_name,
        email,
        formattedBirthdate,
        profileId,
        profileId,
        profileId,
        activities,
      ]);
      return results;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw new Error(error);
    }
  }

  static async deleteUser(profileId) {
    const sql = `
    START TRANSACTION;

    DELETE FROM user_activities WHERE profile_id = ?;
    DELETE FROM post_likes WHERE profile_id = ?;
    DELETE FROM answers WHERE feedback_id IN (SELECT feedback_id FROM feedback WHERE profile_id = ?);
    DELETE FROM calender WHERE profile_id = ?;
    DELETE FROM event_comments WHERE profile_id = ?;
    DELETE FROM feedback WHERE profile_id = ?;
    DELETE FROM user_profiles WHERE profile_id = ?;

    COMMIT;
      `;

    try {
      const results = await this.query(sql, [
        profileId,
        profileId,
        profileId,
        profileId,
        profileId,
        profileId,
        profileId,
      ]);
      return results;
    } catch (error) {
      console.error('Error deleting user profile:', error);
      throw new Error(error);
    }
  }
}

export default UserModels;
