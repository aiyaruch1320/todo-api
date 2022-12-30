import "dotenv/config";
import express from "express";

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hi! Todo App");
});

app.get("/version", (req, res) => {
  res.send("version 0.1.0");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
