//TODO: we should properly put this into it´s own helper or the like, but its here in a controller until we decide on a better st
//we decide on a better structure

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//this will be used to see if youre trying to navigate to pages, you dont have access to
export function authenticateToken(req, res, next) {
  const token = req.cookies['token'];
  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
}
