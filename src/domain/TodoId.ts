export class TodoId {
  constructor(private readonly id: number) {
    if (id < 1 || !Number.isInteger(id)) {
      throw new Error('idは1以上の整数値が必要です');
    }

    // Number.isInteger(1.0)がtrueになるため、明治的に整数値に変換
    this.id = Math.floor(id);
  }

  get value() {
    return this.id;
  }
}
