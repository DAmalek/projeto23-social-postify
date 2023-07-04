export class User {
  constructor(
    private readonly _id: number,
    private _name: string,
    private _email: string,
    private _avatar: string,
    private readonly _createdAt: Date,
  ) {}

  public get avatar(): string {
    return this._avatar;
  }
  public get email(): string {
    return this._email;
  }
  public get name(): string {
    return this._name;
  }

  public set avatar(value: string) {
    this._avatar = value;
  }
  public set email(value: string) {
    this._email = value;
  }
  public set name(value: string) {
    this._name = value;
  }
}
