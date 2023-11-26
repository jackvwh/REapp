import UserModel from "../Models/user.model.js";

class UserController {
  constructor() {
    this.UserController = new UserModel();
  }

  async createUser(req, res) {
    const {
      username,
      password,
      first_name,
      last_name,
      email,
      birthdate,
      privilege,
      signup_date,
    } = req.body;

    try {
      const result = await this.UserController.createUser(
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        privilege,
        signup_date
      );
      res.send(result);
    } catch (error) {
      console.error("error creating user", error);
      throw error;
    }
  }
}

export default UserController;
