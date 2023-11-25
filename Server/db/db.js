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
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

const mysqlConnection = mysql.createPool(dbconfig).getConnection(err => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database');
  }
});
export default mysqlConnection;
