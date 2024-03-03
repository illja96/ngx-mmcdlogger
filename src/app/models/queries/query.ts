export interface Query {
  address: number;
  name: string;
  description: string;
  formula: (value: any) => any;
  units?: string;
}
