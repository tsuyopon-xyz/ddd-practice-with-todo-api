import { TodoEntity } from './TodoEntity';

export class TodoResponse {
  public readonly id: number;
  public readonly title: string;

  constructor(entity: TodoEntity) {
    this.id = entity.id.value;
    this.title = entity.title.value;
  }
}
