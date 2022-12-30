import express from "express";
import todoHandler from "../handler/todo.handler";

const todoRoutes = express.Router();
todoRoutes.get("/", todoHandler.getTodoLists);
todoRoutes.post("/", todoHandler.createTodo);

export default todoRoutes;
