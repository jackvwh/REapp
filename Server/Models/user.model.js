class REappUserController {
  async query(sql, params) {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  async createUser(
    username,
    password,
    first_name,
    last_name,
    email,
    birthdate,
    privilege,
    signup_date
  ) {
    const sql = ` 
        START TRANSACTION;
        INSERT INTO user_profiles (username, password, first_name, last_name, email, birthdate, privilege, signup_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        
        SET @last_id = LAST_INSERT_ID();

        COMMIT;
      `;

    try {
      const result = await query(sql, [
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        privilege,
        signup_date,
      ]);
      return result;
    } catch (error) {
      console.error("error creating user", error);
      throw error;
    }
  }
}

export default REappUserController;
