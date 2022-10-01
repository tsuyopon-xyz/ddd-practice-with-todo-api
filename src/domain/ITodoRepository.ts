import { TodoEntity } from './TodoEntity';
import { TodoId } from './TodoId';
import { TodoDto } from './TodoDto';

export interface ITodoRepository {
  create: (entity: TodoEntity) => TodoDto;
  findAll: () => TodoEntity[];
  findById: (id: TodoId) => TodoDto | null;
  update: (entity: TodoEntity) => TodoDto;
  remove: (entity: TodoEntity) => TodoDto;
}
