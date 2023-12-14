import mysqlconnection from './db.js';

async function query(sql, params) {
  try {
    const [results] = await mysqlconnection.query(sql, params);
    return results;
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error so it can be handled further up the call stack
  }
}

export default query;
