import mysql from "mysql2";
import "dotenv/config";

const dbconfig = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  multipleStatements: true,
};

const connection = mysql.createConnection(dbconfig);

export default connection;
