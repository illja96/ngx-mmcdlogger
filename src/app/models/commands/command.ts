export interface Command {
  address: number;
  name: string;
  successResult: number;
  failedResult?: number;
}
