import REappUserController from "../Models/user.model.js";

class ArtistController {
  constructor() {
    this.ArtistController = new REappUserController();
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
      const result = await this.ArtistController.createUser(
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        privilege,
        signup_date,
      );
      res.send(result);
    } catch (error) {
      console.error('error creating user', error);
      throw error;
    }
  }
}