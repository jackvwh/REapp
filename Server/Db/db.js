import mysql from 'mysql2';
import 'dotenv/config';

const dbconfig = {
  // eslint-disable-next-line no-undef
  host: process.env.MYSQL_HOST,
  // eslint-disable-next-line no-undef
  port: process.env.MYSQL_PORT,
  // eslint-disable-next-line no-undef
  user: process.env.MYSQL_USER,
  // eslint-disable-next-line no-undef
  password: process.env.MYSQL_PASSWORD,
  // eslint-disable-next-line no-undef
  database: process.env.MYSQL_DATABASE,
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
