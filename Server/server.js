import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Api/router.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.NODE_DOCKER_PORT || 3001;

// CORS configuration, this is used for cookies
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(PORT, function () {
  console.log(`🌎  ==> API server running on PORT ${PORT}!`);
  console.log(`🌎  ==> Open http://localhost:${PORT} in your browser`);
});
