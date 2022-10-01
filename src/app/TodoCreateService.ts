import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoCreateCommand } from '../domain/command/TodoCreateCommand';
import { ITodoFactory } from '../domain/ITodoFactory';
import { TodoResponse } from '../domain/TodoResponse';

export class TodoCreateService {
  constructor(
    private readonly repository: ITodoRepository,
    private readonly factory: ITodoFactory
  ) {}

  async handle(command: TodoCreateCommand): Promise<TodoResponse> {
    const entity = this.factory.create(command);
    const createdEntity = await this.repository.create(entity);

    return new TodoResponse(createdEntity);
  }
}
