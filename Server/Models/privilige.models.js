import query from "../Db/query.js";

export default class PrivilegeModels {
  static async insertPrivilege(privilege) {
    const sql = `
        INSERT INTO priviliges
        (title, privilige)
        VALUES (?, ?)
        `;
    const params = [privilege.title, privilege.privilige];
    try {
      const result = await query(sql, params);
      return result.insertId;
    } catch (error) {
      console.error('Error creating privilege:', error);
      throw error;
    }
  }
}
