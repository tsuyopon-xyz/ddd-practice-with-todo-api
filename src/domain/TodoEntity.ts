import { TodoId } from './TodoId';
import { TodoTitle } from './TodoTitle';

type Props = {
  id: TodoId;
  title: TodoTitle;
};

export class TodoEntity {
  public readonly id: TodoId;
  public readonly title: TodoTitle;

  constructor({ id, title }: Props) {
    this.id = id;
    this.title = title;
  }
}
