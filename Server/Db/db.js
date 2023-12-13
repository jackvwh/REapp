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

const connectWithRetry = () => {
  const mysqlConnection = mysql.createConnection(dbconfig);

  mysqlConnection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL, retrying in 1 seconds:', err);
      setTimeout(connectWithRetry, 1000); // Retry after 1 seconds
    } else {
      console.log('Connected to the MySQL server.');
    }
  });

  mysqlConnection.on('error', err => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('MySQL connection lost. Reconnecting...');
      connectWithRetry(); // Reconnect if the connection to the DB is lost
    }
  });

  return mysqlConnection;
};

const mysqlConnection = connectWithRetry();

export default mysqlConnection;
