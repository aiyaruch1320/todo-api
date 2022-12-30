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
}

export default new TodoHandler();
