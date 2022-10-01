type Props = {
  id: number;
  title: string;
};

export class TodoUpdateCommand {
  public readonly id: number;
  public readonly title: string;

  constructor({ id, title }: Props) {
    this.id = id;
    this.title = title;
  }
}
