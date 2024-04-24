import { QueryGroup } from "./query-group";
import { QueryType } from "./query-type";
import { QueryUnit } from "./query-unit";

export interface Query {
  addresses: number[];
  group: QueryGroup;
  propertyName: string;
  displayName: string;
  formula: (values: number[]) => number;
  type: QueryType;
  units: QueryUnit;
}
