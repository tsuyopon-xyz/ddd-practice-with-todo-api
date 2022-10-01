export class ErrorResponse {
  public readonly message: string;

  constructor(error: Error) {
    this.message = error.message;
  }
}
