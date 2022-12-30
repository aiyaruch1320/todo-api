import { ITodo } from "../interface/todo";

export default class TodoService {
  constructor() {}
  async getTodoLists() {
    const todoLists: ITodo[] = [
      {
        id: "1",
        content: "Hello World",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        order: 1,
      },
      {
        id: "2",
        content: "Test",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        order: 2,
      },
    ];
    return todoLists;
  }
}
