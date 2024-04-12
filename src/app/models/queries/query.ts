import { QueryType } from "./query-type";
import { QueryUnit } from "./query-unit";

export interface Query {
  propertyName: string;
  displayName: string;
  description?: string;

  address: number;
  type: QueryType;
  units?: QueryUnit;
  formula: (rawValue: number) => number;
}
