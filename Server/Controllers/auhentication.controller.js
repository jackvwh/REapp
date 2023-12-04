//TODO: we should properly put this into it´s own helper or the like, but its here in a controller until we decide on a better st
//we decide on a better structure

import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();


//this will be used to see if youre trying to navigate to pages, you dont have access to
export function authenticateToken(res,req,next){
    const authheader = req.headers['authorization'];
    const token = authheader && authheader.split('')[1];
//todo: you should be send to the login page, in case your token is expired or wrong so you can get a new one.
    if(!token){
        return res.status(401).send('Access denied/get bent');
    }

    try{
        //does a random user have their jwt token saved in dotenv then?
        const verified = jwt.verify(token, process.env.JWT_secret);
        req.user = verified;
        next();
    } catch(error) {
        res.status(400).send('invalid token');
    }
}

