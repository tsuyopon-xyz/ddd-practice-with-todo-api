import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoEntity } from '../domain/TodoEntity';

export class TodoRepository implements ITodoRepository {
  create: (data: TodoEntity) => TodoEntity;
  findAll: () => TodoEntity[];
  findById: () => TodoEntity | null;
  update: (data: TodoEntity) => TodoEntity;
  remove: (data: TodoEntity) => TodoEntity;
}
