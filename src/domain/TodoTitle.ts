import { IValueObject } from './IValueObject';

export class TodoTitle implements IValueObject<string> {
  constructor(private readonly title: string) {
    const trimmedText = title.trim();

    if (trimmedText.length < 1 || trimmedText.length > 20) {
      throw new Error('TodoTitleは1文字以上20文字以下で入力が必要です');
    }

    this.title = trimmedText;
  }

  get value() {
    return this.title;
  }
}
