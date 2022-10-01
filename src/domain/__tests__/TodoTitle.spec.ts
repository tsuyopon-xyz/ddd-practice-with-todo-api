import { TodoTitle } from '../TodoTitle';

describe('TodoTitle Test', () => {
  it('can set string 1 < text.length <= 20', () => {
    ['1', '12345678901234567890', ' 12345678901234567890 '].forEach((text) => {
      const title = new TodoTitle(text);
      expect(title.value).toEqual(text.trim());
    });
  });

  it('fails when set 0, negative integer and float numbers', () => {
    ['', ' ', '123456789012345678901'].forEach((text) => {
      try {
        new TodoTitle(text);
        throw new Error(`意図しないエラー（text: ${text}）`);
      } catch (error) {
        expect((error as Error).message).toEqual(
          'TodoTitleは1文字以上20文字以下で入力が必要です'
        );
      }
    });
  });
});
