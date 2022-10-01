import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoResponse } from '../domain/TodoResponse';

export class TodoFindAllService {
  constructor(private readonly repository: ITodoRepository) {}

  async handle(): Promise<TodoResponse[]> {
    const entities = await this.repository.findAll();

    return entities.map((entity) => new TodoResponse(entity));
  }
}
