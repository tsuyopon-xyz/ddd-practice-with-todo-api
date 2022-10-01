import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoResponse } from '../domain/TodoResponse';
import { TodoId } from '../domain/TodoId';
import { TodoUpdateCommand } from '../domain/command/TodoUpdateCommand';
import { TodoTitle } from '../domain/TodoTitle';
import { TodoEntity } from '../domain/TodoEntity';

export class TodoUpdateService {
  constructor(private readonly repository: ITodoRepository) {}

  async handle(command: TodoUpdateCommand): Promise<TodoResponse | null> {
    const id = new TodoId(command.id);
    const storedEntity = await this.repository.findById(id);
    if (!storedEntity) {
      return null;
    }

    const title = new TodoTitle(command.title);
    const entity = new TodoEntity({ id, title });
    const updatedEntity = await this.repository.update(entity);

    return new TodoResponse(updatedEntity);
  }
}
