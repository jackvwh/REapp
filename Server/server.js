import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import routes from './api/router.js';
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the root of your project
const projectRoot = path.join(__dirname, '../..');

// Serve static files from the React app
app.use(express.static(path.join(projectRoot, '/reapp/client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(projectRoot, 'reapp/client/build', 'index.html'));
});

// Uncomment and modify this part once you have your routes set up
// import routes from './api/server/router';
// app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎  ==> API server running on PORT ${PORT}!`);
});


