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

async function checkDatabaseConnection(retries = 10, delay = 2000) {
  while (retries) {
    try {
      const connection = await mysqlconnection.getConnection();
      console.log('Connected to the mysql server');
      connection.release();
      break; // Break the loop if connection is successful
    } catch (err) {
      console.error('Error connecting to database:', err);
      retries -= 1; // Decrement the retry counter
      console.log(`Retrying to connect... (${retries} retries left)`);
      await new Promise(res => setTimeout(res, delay)); // Wait for a specified delay
    }
  }

  if (retries === 0) {
    // Handle the case when all retries are exhausted
    throw new Error('Failed to connect to the database after multiple attempts');
  }
}

// Call the function to check the connection
checkDatabaseConnection();

export default mysqlconnection;
