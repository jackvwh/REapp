import mysqlConnection from '../Db/db.js';

export default class PrivilegeModels {
  static async query(sql, params) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query(sql, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async insertPrivilege(privilege) {
    const sql = `
        INSERT INTO priviliges
        (title, privilige)
        VALUES (?, ?)
        `;
    const params = [privilege.title, privilege.privilige];
    const result = await this.query(sql, params);
    return result.insertId;
  }
}
