// db.ts
import mongoose from "mongoose";

const url: string | undefined = process.env.MONGO_URI;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!url) {
    throw new Error(
      "MongoDB connection string is missing. Please set MONGO_URI in your .env.local file."
    );
  }
  
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

export default connectDB;