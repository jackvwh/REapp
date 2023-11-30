import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Api/router.js';

dotenv.config();
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
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
