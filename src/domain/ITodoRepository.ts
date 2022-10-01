import { TodoEntity } from './TodoEntity';

export interface ITodoRepository {
  create: (data: TodoEntity) => TodoEntity;
  findAll: () => TodoEntity[];
  findById: () => TodoEntity | null;
  update: (data: TodoEntity) => TodoEntity;
  remove: (data: TodoEntity) => TodoEntity;
}
