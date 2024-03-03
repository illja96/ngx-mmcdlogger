export interface SensorInfo {
  name: string;
  address: number;  
  formula: (value: any) => any;
  units: string;
}
