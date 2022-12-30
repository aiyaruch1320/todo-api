import { ITodo } from "../interface/todo";

class TodoModel {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  order: number;
  constructor(entity: ITodo) {
    this.id = entity.id;
    this.content = entity.content;
    this.completed = entity.completed;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.order = entity.order;
  }

  toJson(): ITodo {
    return {
      id: this.id,
      content: this.content,
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      order: this.order,
    };
  }
}

export default TodoModel;
