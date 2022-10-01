import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoEntity } from '../domain/TodoEntity';
import { TodoId } from '../domain/TodoId';
import { TodoDto } from '../domain/TodoDto';

const createTodoDto = (entity: TodoEntity) => {
  return new TodoDto(entity.id.value, entity.title.value);
};
export class TodoRepository implements ITodoRepository {
  private entities: TodoEntity[] = [];

  create(entity: TodoEntity) {
    this.entities.push(entity);

    return createTodoDto(entity);
  }
  findAll() {
    return [...this.entities];
  }

  findById(id: TodoId) {
    const entity =
      this.entities.find((entity) => entity.id.value === id.value) ?? null;
    if (!entity) {
      return null;
    }

    return createTodoDto(entity);
  }

  update(entity: TodoEntity) {
    const index = this.entities.findIndex(
      (_entity) => entity.id.value === _entity.id.value
    );
    if (index === -1) {
      throw new Error(`存在しません（${entity.id.value}）`);
    }

    this.entities[index] = entity;

    return createTodoDto(entity);
  }

  remove(entity: TodoEntity) {
    const index = this.entities.findIndex(
      (_entity) => entity.id.value === _entity.id.value
    );
    if (index === -1) {
      throw new Error(`存在しません（${entity.id.value}）`);
    }

    this.entities = this.entities.filter(
      (_entity) => entity.id.value !== _entity.id.value
    );

    return createTodoDto(entity);
  }
}
