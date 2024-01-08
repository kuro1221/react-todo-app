export class Todo {
  constructor(
    public id: number,
    public title: string,
    public complete_flg: boolean,
    public delete_flg: boolean,
    public tag: string
  ) {}
}
