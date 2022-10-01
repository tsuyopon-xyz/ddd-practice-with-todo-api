import { TodoEntity } from './TodoEntity';
import { TodoId } from './TodoId';

export interface ITodoRepository {
  create: (entity: TodoEntity) => Promise<TodoEntity>;
  findAll: () => Promise<TodoEntity[]>;
  findById: (id: TodoId) => Promise<TodoEntity | null>;
  update: (entity: TodoEntity) => Promise<TodoEntity>;
  remove: (entity: TodoEntity) => Promise<TodoEntity>;
}
