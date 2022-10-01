import { TodoEntity } from '../TodoEntity';
import { TodoId } from '../TodoId';
import { TodoTitle } from '../TodoTitle';

describe('TodoEntity Test', () => {
  it('creates TodoEntity', () => {
    const id = new TodoId(1);
    const title = new TodoTitle('abc');
    const entity = new TodoEntity({ id, title });

    expect(entity.id).toEqual(id);
    expect(entity.title).toEqual(title);
  });
});
