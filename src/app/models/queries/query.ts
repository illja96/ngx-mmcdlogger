export interface Query {
  address: number;
  name: string;
  description: string;
  formula: (value: number) => number;
  units?: string;
}
