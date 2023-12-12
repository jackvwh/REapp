import mysql from 'mysql2';
import 'dotenv/config';

const dbconfig = {
  // eslint-disable-next-line no-undef
  host: process.env.DB_HOST,
  // eslint-disable-next-line no-undef
  port: process.env.DB_PORT,
  // eslint-disable-next-line no-undef
  user: process.env.DB_USER,
  // eslint-disable-next-line no-undef
  password: process.env.DB_PASSWORD,
  // eslint-disable-next-line no-undef
  database: process.env.DB_DATABASE,
  multipleStatements: true,
};

const mysqlConnection = mysql.createConnection(dbconfig);

mysqlConnection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

export default mysqlConnection;
