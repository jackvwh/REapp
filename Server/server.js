import express from 'express';
import cors from 'cors';
import router from './Api/router.js';
import 'dotenv/config.js';

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
