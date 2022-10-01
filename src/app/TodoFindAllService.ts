import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoCreateCommand } from '../domain/command/TodoCreateCommand';
import { TodoDto } from '../domain/TodoDto';

export class TodoFindAll {
  constructor(private readonly repository: ITodoRepository) {}

  handle(): TodoDto[] {
    const dtos = this.repository.findAll();

    return dtos;
  }
}
