import mongoose from "mongoose";

export const connectDB = () => {
  const username = process.env.MONGO_INITDB_ROOT_USERNAME;
  const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const database = process.env.MONGO_INITDB_DATABASE;
  const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;

  mongoose.connect(uri);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB!");
  });
  return db;
};
