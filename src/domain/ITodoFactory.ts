import { TodoEntity } from './TodoEntity';
import { TodoCreateCommand } from './command/TodoCreateCommand';

export interface ITodoFactory {
  create(command: TodoCreateCommand): TodoEntity;
}
