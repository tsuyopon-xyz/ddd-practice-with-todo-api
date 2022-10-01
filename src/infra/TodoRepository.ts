import { ITodoRepository } from '../domain/ITodoRepository';
import { TodoEntity } from '../domain/TodoEntity';
import { TodoId } from '../domain/TodoId';

export class TodoRepository implements ITodoRepository {
  private entities: TodoEntity[] = [];

  async create(entity: TodoEntity) {
    this.entities.push(entity);

    return entity;
  }

  async findAll() {
    return [...this.entities];
  }

  async findById(id: TodoId) {
    const entity =
      this.entities.find((entity) => entity.id.value === id.value) ?? null;
    if (!entity) {
      return null;
    }

    return { ...entity };
  }

  async update(entity: TodoEntity) {
    const index = this.entities.findIndex(
      (_entity) => entity.id.value === _entity.id.value
    );
    if (index === -1) {
      throw new Error(`存在しません（${entity.id.value}）`);
    }

    this.entities[index] = entity;

    return entity;
  }

  async remove(entity: TodoEntity) {
    const index = this.entities.findIndex(
      (_entity) => entity.id.value === _entity.id.value
    );
    if (index === -1) {
      throw new Error(`存在しません（${entity.id.value}）`);
    }

    this.entities = this.entities.filter(
      (_entity) => entity.id.value !== _entity.id.value
    );

    return entity;
  }
}
