import UserModels from '../Models/users.models.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class UserController {
  static async getUserById(req, res) {
    try {
      const user = await UserModels.getUserById(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while getting user' + error });
    }
  }

  static async LoginUser(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserModels.ValidateUser(username, password);

      if (user) {
        //TODO: cube makes a good point if userID is necessary here 
        //Generate a JWT token
        const token = jwt.sign({ username: user.username, userId: user.userId }, process.env.JWT_SECRET, {expiresIn: '8h' });

        res.cookie('token', token, {
          secure: true,  // Use HTTPS in production
          sameSite: 'Lax',  // Strictly same site
          maxAge: 8 * 60 * 60 * 1000  // Cookie expiry in milliseconds, same as JWT, but this is 8 hours
        });
        res.status(200).json({ message: 'Logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' })
      }
    }catch (error){
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  }

  static async Logout(req, res){
    res.clearCookie('token');
    res.status(200).send('Logged out successfully')
  }
  
  

  static async createUser(req, res) {
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
      const newUser = await UserModels.createUser(
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        privilege,
        signup_date
      );
      const token = jwt.sign({username}, process.env.JWT_SECRET,{expiresIn: '1h'}); //TODO: is this nessacary or is it for first time login only?
      res.status(200).json({user: newUser, token});
    } catch (error) {
      console.error('error creating user', error);
      res
        .status(500)
        .json({ error: 'An error occurred while creating a user' + error });
    }
  }

  static async updateUser(req, res) {
    const userId = req.params.userId;
    const { username, password, firstName, lastName, email, birthdate, activities } =
      req.body;
    try {
      const updatedUser = await UserModels.updateUser(
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
        birthdate,
        activities
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while updating user' + error });
    }
  }

  static async deleteUser(req, res) {
    const id = req.params.id;
    try {
      const deletedUser = await UserModels.deleteUser(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while deleting user' + error });
    }
  }
}
