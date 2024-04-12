import { Curves } from "../curves";
import { Query } from "./query";
import { QueryType } from "./query-type";
import { QueryUnit } from "./query-unit";

export class Queries {
  public static port1: Query = { address: 0x00, propertyName: "port1", displayName: "PORT1", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port2: Query = { address: 0x01, propertyName: "port2", displayName: "PORT2", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port3: Query = { address: 0x02, propertyName: "port3", displayName: "PORT3", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port4: Query = { address: 0x03, propertyName: "port4", displayName: "PORT4", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port5: Query = { address: 0x04, propertyName: "port5", displayName: "PORT5", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port6: Query = { address: 0x05, propertyName: "port6", displayName: "PORT6", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static timingAdv: Query = { address: 0x06, propertyName: "timingAdv", displayName: "TIMADV", formula: x => x - 10, type: QueryType.number, units: QueryUnit.degree };
  public static ectRaw: Query = { address: 0x07, propertyName: "ectRaw", displayName: "ETC-R", formula: x => Curves.ECT[x], type: QueryType.number, units: QueryUnit.celsius };
  public static isc0: Query = { address: 0x08, propertyName: "isc0", displayName: "ISC-0", formula: x => x, type: QueryType.number, units: QueryUnit.step };
  public static iscY0: Query = { address: 0x09, propertyName: "iscY0", displayName: "ISC-Y0", formula: x => x, type: QueryType.number, units: QueryUnit.step };
  public static isc1: Query = { address: 0x0A, propertyName: "isc1", displayName: "ISC-1", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static iscY1: Query = { address: 0x0B, propertyName: "iscY1", displayName: "ISC-Y1", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static ftrim_low: Query = { address: 0x0C, propertyName: "ftrim_low", displayName: "FTRIM-L", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };
  public static ftrim_mid: Query = { address: 0x0D, propertyName: "ftrim_mid", displayName: "FTRIM-M", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };
  public static ftrim_hi: Query = { address: 0x0E, propertyName: "ftrim_hi", displayName: "FTRIM-H", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };
  public static o2Fbk: Query = { address: 0x0F, propertyName: "o2Fbk", displayName: "O2-FBK", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };

  public static ectFiltered: Query = { address: 0x10, propertyName: "ectFiltered", displayName: "ECT-F", formula: x => Curves.ECT[x], type: QueryType.number, units: QueryUnit.celsius };
  public static iatChecked: Query = { address: 0x11, propertyName: "iatChecked", displayName: "IAT-C", formula: x => Curves.IAT[x], type: QueryType.number, units: QueryUnit.celsius };
  public static egrtRaw: Query = { address: 0x12, propertyName: "egrtRaw", displayName: "EGRT", formula: x => -2.7 * x + 597.7, type: QueryType.number, units: QueryUnit.fahrenheit };
  public static o2Raw: Query = { address: 0x13, propertyName: "o2Raw", displayName: "O2-R", formula: x => .0195 * x, type: QueryType.number, units: QueryUnit.volt };
  public static battRaw: Query = { address: 0x14, propertyName: "battRaw", displayName: "BATT", formula: x => .0733 * x, type: QueryType.number, units: QueryUnit.volt };
  public static baroRaw: Query = { address: 0x15, propertyName: "baroRaw", displayName: "BARO", formula: x => .00486 * x, type: QueryType.number, units: QueryUnit.bar };
  public static iscStepCurr: Query = { address: 0x16, propertyName: "iscStepCurr", displayName: "ISC-C", formula: x => x, type: QueryType.number, units: QueryUnit.step };
  public static tpsRaw: Query = { address: 0x17, propertyName: "tpsRaw", displayName: "TPS-R", formula: x => 100 * x / 255, type: QueryType.number, units: QueryUnit.percent };
  public static closedLpFlags: Query = { address: 0x18, propertyName: "closedLpFlags", displayName: "CLMF", description: "Closed loop mode flags", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static ftrimFlags: Query = { address: 0x19, propertyName: "ftrimFlags", displayName: "FTRIM-F", description: "Fuel trim register flags", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static mafRaw: Query = { address: 0x1A, propertyName: "mafRaw", displayName: "MAF", formula: x => 6.25 * x, type: QueryType.number, units: QueryUnit.hertz };
  public static ftrim_low_0x1B: Query = { address: 0x1B, propertyName: "ftrim_low_0x1B", displayName: "FTRIM-1B", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };
  public static airVol: Query = { address: 0x1C, propertyName: "airVol", displayName: "AIRVOL", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static accEnr: Query = { address: 0x1D, propertyName: "accEnr", displayName: "ACCENR", formula: x => 100 * x / 255, type: QueryType.number, units: QueryUnit.percent };
  public static state1: Query = { address: 0x1E, propertyName: "state1", displayName: "STATE1", description: "Engine start-up stages and running condition state flags", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static ftrim_low_0x1F: Query = { address: 0x1F, propertyName: "ftrim_low_0x1F", displayName: "FTRIM-1F", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };

  public static rpm8: Query = { address: 0x20, propertyName: "rpm8", displayName: "RPM-8", formula: x => x * 7.8125, type: QueryType.number, units: QueryUnit.rpm };
  public static rpm31: Query = { address: 0x21, propertyName: "rpm31", displayName: "RPM-31", formula: x => x * 31.25, type: QueryType.number, units: QueryUnit.rpm };
  public static port3Snap1: Query = { address: 0x22, propertyName: "port3Snap1", displayName: "PORT3-S1", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static iscLrnFlags: Query = { address: 0x23, propertyName: "iscLrnFlags", displayName: "ISC-F", description: "ISC learning flags", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static idleSpdTarg: Query = { address: 0x24, propertyName: "idleSpdTarg", displayName: "RPM-CT", formula: x => x * 7.8125, type: QueryType.number, units: QueryUnit.rpm };
  public static iscStepTarg: Query = { address: 0x25, propertyName: "iscStepTarg", displayName: "ISC-T", formula: x => x, type: QueryType.number, units: QueryUnit.step };
  public static knockSum: Query = { address: 0x26, propertyName: "knockSum", displayName: "KNOCK", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port3Snap0: Query = { address: 0x27, propertyName: "port3Snap0", displayName: "PORT3-S0", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static port4Snap: Query = { address: 0x28, propertyName: "port4Snap", displayName: "PORT4-S", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static injPw: Query = { address: 0x29, propertyName: "injPw", displayName: "INJ-PW", formula: x => .256 * x, type: QueryType.number, units: QueryUnit.ms };
  public static injPw1: Query = { address: 0x2A, propertyName: "injPw1", displayName: "INJ-PW1", formula: x => .256 * x, type: QueryType.number, units: QueryUnit.ms };
  public static enerLen: Query = { address: 0x2B, propertyName: "enerLen", displayName: "COIL", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static airCnt0: Query = { address: 0x2C, propertyName: "airCnt0", displayName: "AIR-C0", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static airCnt1: Query = { address: 0x2D, propertyName: "airCnt1", displayName: "AIR-C1", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static injFactor: Query = { address: 0x2E, propertyName: "injFactor", displayName: "INJ-F", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static injFactor1: Query = { address: 0x2F, propertyName: "injFactor1", displayName: "INJ-F1", formula: x => x, type: QueryType.number, units: QueryUnit.number };

  public static iscFlags0: Query = { address: 0x30, propertyName: "iscFlags0", displayName: "ISC-F0", description: "ISC updating register flags", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static temp1: Query = { address: 0x31, propertyName: "temp1", displayName: "TEMP1", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static temp2: Query = { address: 0x32, propertyName: "temp2", displayName: "TEMP2", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static temp3: Query = { address: 0x33, propertyName: "temp3", displayName: "TEMP3", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static temp4: Query = { address: 0x34, propertyName: "temp4", displayName: "TEMP4", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static temp5: Query = { address: 0x35, propertyName: "temp5", displayName: "TEMP5", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static o2BadCnt: Query = { address: 0x36, propertyName: "o2BadCnt", displayName: "O2-BC", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static egrtBadCnt: Query = { address: 0x37, propertyName: "egrtBadCnt", displayName: "EGRT-BC", formula: x => x, type: QueryType.number, units: QueryUnit.number };
  public static faultHi: Query = { address: 0x38, propertyName: "faultHi", displayName: "FAULT-H", description: "Faults, high byte", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static faultLo: Query = { address: 0x39, propertyName: "faultLo", displayName: "FAULT-L", description: "Faults, low byte", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static iatRaw: Query = { address: 0x3A, propertyName: "iatRaw", displayName: "IAT-R", description: "Intake air temperature (raw)", formula: x => Curves.IAT[x], type: QueryType.number, units: QueryUnit.celsius };
  public static stFaultHi: Query = { address: 0x3B, propertyName: "stFaultHi", displayName: "FAULT-SH", description: "Stored faults, High byte", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static stFaultLo: Query = { address: 0x3C, propertyName: "stFaultLo", displayName: "FAULT-SL", description: "Stored faults, Low byte", formula: x => x, type: QueryType.flags, units: QueryUnit.flags };
  public static ftrim_low_0x3D: Query = { address: 0x3D, propertyName: "ftrim_low_0x3D", displayName: "FTRIM-3D", formula: x => .78 * x, type: QueryType.number, units: QueryUnit.percent };

  public static ecuVersion: Query = { address: 0xFD, propertyName: "ecuVersion", displayName: "ECUVER", description: "ECU Version", formula: x => x, type: QueryType.number, units: QueryUnit.number };
}
