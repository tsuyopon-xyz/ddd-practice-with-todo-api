import { TodoCreateCommand } from './command/TodoCreateCommand';
import { ITodoFactory } from './ITodoFactory';
import { TodoEntity } from './TodoEntity';
import { TodoId } from './TodoId';
import { TodoTitle } from './TodoTitle';

export class TodoFactory implements ITodoFactory {
  private nextId: number = 1;

  create(command: TodoCreateCommand): TodoEntity {
    const id = new TodoId(this.nextId++);
    const title = new TodoTitle(command.title);
    const entity = new TodoEntity({ id, title });

    return entity;
  }
}
