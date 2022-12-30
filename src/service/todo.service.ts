import { ITodo } from "../interface/todo";
import Todo from "../models/todo";

export default class TodoService {
  constructor() {}
  async getTodoLists(): Promise<ITodo[]> {
    return await Todo.find();
  }
}
