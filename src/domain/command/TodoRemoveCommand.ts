type Props = {
  id: number;
};

export class TodoRemoveCommand {
  public readonly id: number;

  constructor({ id }: Props) {
    this.id = id;
  }
}
