import mysql from 'mysql2/promise';
import 'dotenv/config';

const mysqlconnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  multipleStatements: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// check connection and log
async function checkDatabaseConnection() {
  try {
    const connection = await mysqlconnection.getConnection();
    console.log('Connected to the mysql server');
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
}

// Call the function to check the connection
checkDatabaseConnection();

export default mysqlconnection;
