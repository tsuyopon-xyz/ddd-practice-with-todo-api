type Props = {
  id: number;
};

export class TodoFindByIdCommand {
  public readonly id: number;

  constructor({ id }: Props) {
    this.id = id;
  }
}
