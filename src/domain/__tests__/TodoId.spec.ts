import { TodoId } from '../TodoId';

describe('TodoId Test', () => {
  it('can set positive integer', () => {
    [1, 100, 1000, 100000, 1.0].forEach((id) => {
      const todoId = new TodoId(id);
      expect(todoId.value).toEqual(id);
    });
  });

  it('fails when set 0, negative integer and float numbers', () => {
    [0, -1, -1000, -100000, 1.1].forEach((id) => {
      try {
        new TodoId(id);
        throw new Error(`意図しないエラー（id: ${id}）`);
      } catch (error) {
        expect((error as Error).message).toEqual('idは1以上の整数値が必要です');
      }
    });
  });
});
