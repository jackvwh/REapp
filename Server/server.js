import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import router from './api/router.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
