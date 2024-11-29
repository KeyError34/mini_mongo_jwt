import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGO_URI;
const clientMDB = new MongoClient(uri);

let dbConnection = null;

async function connectToDB() {
  try {
    await clientMDB.connect();
    console.log('Connected successfully to MongoDB');
    dbConnection = clientMDB.db();
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw err;
  }
}

function getDB() {
  if (!dbConnection) {
    throw new Error('Database not connected');
  }
  return dbConnection;
}

export { connectToDB, getDB };
