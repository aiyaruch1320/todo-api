import cors from "cors";
import express from "express";
import { connectDB } from "./config/db";
import appRoutes from "./routes/app.routes";

export const buildExpress = () => {
  const app = express();
  connectDB();
  app.use(express.json());
  app.use(
    cors({
      origin: [process.env.FRONTEND_HOST ?? "*", "http://localhost:3000", "*"],
      credentials: true,
    })
  );
  app.get("/", (req, res) => {
    res.send("Hi! Todo App");
  });
  app.get("/version", (req, res) => {
    res.send("version 0.1.0");
  });
  app.use("/api", appRoutes);
  return app;
};
