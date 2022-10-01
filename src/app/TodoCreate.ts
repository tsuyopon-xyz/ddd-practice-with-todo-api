import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoCreateCommand } from '../domain/command/TodoCreateCommand';
import { ITodoFactory } from '../domain/ITodoFactory';
import { TodoDto } from '../domain/TodoDto';

export class TodoCreate {
  constructor(
    private readonly repository: ITodoRepository,
    private readonly factory: ITodoFactory
  ) {}

  handle(command: TodoCreateCommand): TodoDto {
    const entity = this.factory.create(command);
    const dto = this.repository.create(entity);

    return dto;
  }
}
