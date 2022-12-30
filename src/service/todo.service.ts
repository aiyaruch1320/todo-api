import { ITodo } from "../interface/todo";
import Todo from "../models/todo";

export default class TodoService {
  constructor() {}
  async getTodoLists(): Promise<ITodo[]> {
    return await Todo.find();
  }

  async createTodo(todo: ITodo) {
    return await Todo.create({
      ...todo,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
