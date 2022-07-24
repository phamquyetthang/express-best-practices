interface IError {
  code?: string;
  message: string;
}
export default class HttpException extends Error {
  public status: number;
  public error: IError = {
    code: '',
    message: '',
  };

  constructor(status: number, error: IError) {
    super(error.message);
    this.status = status;
    this.error = error;
  }
}
