import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoResponse } from '../domain/TodoResponse';
import { TodoId } from '../domain/TodoId';
import { TodoRemoveCommand } from '../domain/command/TodoRemoveCommand';

export class TodoRemoveService {
  constructor(private readonly repository: ITodoRepository) {}

  async handle(command: TodoRemoveCommand): Promise<TodoResponse | null> {
    const todoId = new TodoId(command.id);
    const entity = await this.repository.findById(todoId);
    if (!entity) {
      return null;
    }

    const removedEntity = await this.repository.remove(entity);

    return new TodoResponse(removedEntity);
  }
}
