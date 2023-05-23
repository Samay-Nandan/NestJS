export class IResult {
  [key: string]: string | number;
}
export class IResponse {
  data: {
    status: boolean;
    url: string;
    method: string;
    timestamp: string;
    result: Array<IResult> | object;
  };
}
