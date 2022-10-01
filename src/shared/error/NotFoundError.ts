export class NotFoundError extends Error {
  constructor(message?: string) {
    if (message && message.length > 0) {
      super(message);
      return;
    }

    super('Not Found');
    this.name = NotFoundError.name;
  }

  toString() {
    return 'hahaha';
  }
}
