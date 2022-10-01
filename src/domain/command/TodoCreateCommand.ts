type Props = {
  id: number;
  title: string;
};

export class TodoCreateCommand {
  public readonly title: string;

  constructor({ title }: Props) {
    this.title = title;
  }
}
