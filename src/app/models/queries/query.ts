import { QueryType } from "./query-type";
import { QueryUnit } from "./query-unit";

export interface Query {
  address: number;
  name: string;
  description: string;

  formula: (rawValue: number) => number;
  type: QueryType;
  units?: QueryUnit;
}
