import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoResponse } from '../domain/TodoResponse';
import { TodoId } from '../domain/TodoId';
import { TodoFindByIdCommand } from '../domain/command/TodoFindByIdCommand';

export class TodoFindByIdService {
  constructor(private readonly repository: ITodoRepository) {}

  async handle(command: TodoFindByIdCommand): Promise<TodoResponse | null> {
    const todoId = new TodoId(command.id);
    const entity = await this.repository.findById(todoId);
    if (!entity) {
      return null;
    }

    return new TodoResponse(entity);
  }
}
