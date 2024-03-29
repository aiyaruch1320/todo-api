import { Request, Response } from "express";
import TodoService from "../service/todo.service";

class TodoHandler {
  constructor(private readonly todoService = new TodoService()) {}
  getTodoLists = async (req: Request, res: Response) => {
    try {
      const todoLists = await this.todoService.getTodoLists();
      res.status(200).json(todoLists);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  createTodo = async (req: Request, res: Response) => {
    try {
      const todo = await this.todoService.createTodo(req.body);
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  sortTodoLists = async (req: Request, res: Response) => {
    try {
      await this.todoService.sortTodoLists(req.body);
      res.status(200).json({ message: "sorted success" });
    } catch (err) {
      res.status(500).json(err);
    }
  };

  deleteTodo = async (req: Request, res: Response) => {
    try {
      await this.todoService.deleteTodoById(req.params.id);
      res.status(200).json({ message: "deleted success" });
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

export default new TodoHandler();
