import express from "express";
import todoRoutes from "./todo.routes";

const appRoutes = express.Router();

appRoutes.use("/todos", todoRoutes);

export default appRoutes;
