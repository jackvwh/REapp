import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Api/router.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.NODE_DOCKER_PORT || 5000;

// CORS configuration, this is used for cookies
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(router);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the root of your project
const projectRoot = path.join(__dirname, '../..');

// Serve static files from the React app
app.use(express.static(path.join(projectRoot, '/reapp/client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(projectRoot, 'reapp/client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API server running on PORT ${PORT}!`);
  console.log(`🌎  ==> Open http://localhost:${PORT} in your browser`);
});
