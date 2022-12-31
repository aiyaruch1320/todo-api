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

  async sortTodoLists(todos: ITodo[]) {
    return await Promise.all(
      todos.map(async (todo) => {
        return await Todo.updateOne(
          { _id: todo.id },
          {
            ...todo,
            updatedAt: new Date(),
          }
        );
      })
    );
  }

  async deleteTodoById(id: string) {
    return await Todo.findByIdAndDelete(id);
  }
}
