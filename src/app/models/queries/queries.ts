import { QueryValueCurves } from "./query-value-curves";
import { Query } from "./query";
import { QueryGroup } from "./query-group";
import { QueryType } from "./query-type";
import { QueryUnit } from "./query-unit";
import { QueryValueHelper } from "./query-value-helper";

export class Queries {
  public static port1: Query = { addresses: [0x00], group: QueryGroup.flags, propertyName: "port1", displayName: "PORT1", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static port2: Query = { addresses: [0x01], group: QueryGroup.flags, propertyName: "port2", displayName: "PORT2", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static port3: Query = { addresses: [0x02], group: QueryGroup.flags, propertyName: "port3", displayName: "PORT3", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static port4: Query = { addresses: [0x03], group: QueryGroup.flags, propertyName: "port4", displayName: "PORT4", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static port5: Query = { addresses: [0x04], group: QueryGroup.flags, propertyName: "port5", displayName: "PORT5", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static port6: Query = { addresses: [0x05], group: QueryGroup.flags, propertyName: "port6", displayName: "PORT6", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static timingAdv: Query = { addresses: [0x06], group: QueryGroup.common, propertyName: "timingAdv", displayName: "TIMADV", formula: x => x[0] - 10, type: QueryType.number, units: QueryUnit.degree };
  public static ectRaw: Query = { addresses: [0x07], group: QueryGroup.common, propertyName: "ectRaw", displayName: "ETC-R", formula: x => QueryValueCurves.ECT[x[0]], type: QueryType.temperature, units: QueryUnit.celsius };
  // 0x08 is isc0. Contains only first 8 bit of 16 bit value
  public static iscY0: Query = { addresses: [0x09], group: QueryGroup.debug, propertyName: "iscY0", displayName: "ISC-Y0", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  // 0x0A is isc1. Contains only first 8 bit of 16 bit value
  public static iscY1: Query = { addresses: [0x0B], group: QueryGroup.debug, propertyName: "iscY1", displayName: "ISC-Y1", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static ftrim_low: Query = { addresses: [0x0C], group: QueryGroup.common, propertyName: "ftrim_low", displayName: "FTRIM-L", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };
  public static ftrim_mid: Query = { addresses: [0x0D], group: QueryGroup.common, propertyName: "ftrim_mid", displayName: "FTRIM-M", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };
  public static ftrim_hi: Query = { addresses: [0x0E], group: QueryGroup.common, propertyName: "ftrim_hi", displayName: "FTRIM-H", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };
  public static o2Fbk: Query = { addresses: [0x0F], group: QueryGroup.common, propertyName: "o2Fbk", displayName: "O2-FBK", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };

  public static ectFiltered: Query = { addresses: [0x10], group: QueryGroup.common, propertyName: "ectFiltered", displayName: "ECT-F", formula: x => QueryValueCurves.ECT[x[0]], type: QueryType.temperature, units: QueryUnit.celsius };
  public static iatChecked: Query = { addresses: [0x11], group: QueryGroup.common, propertyName: "iatChecked", displayName: "IAT-C", formula: x => QueryValueCurves.IAT[x[0]], type: QueryType.temperature, units: QueryUnit.celsius };
  public static egrtRaw: Query = { addresses: [0x12], group: QueryGroup.common, propertyName: "egrtRaw", displayName: "EGRT", formula: x => -1.5 * x[0] + 314.28, type: QueryType.temperature, units: QueryUnit.celsius };
  public static o2Raw: Query = { addresses: [0x13], group: QueryGroup.common, propertyName: "o2Raw", displayName: "O2-R", formula: x => .0195 * x[0], type: QueryType.number, units: QueryUnit.volt };
  public static battRaw: Query = { addresses: [0x14], group: QueryGroup.common, propertyName: "battRaw", displayName: "BATT", formula: x => .0733 * x[0], type: QueryType.number, units: QueryUnit.volt };
  public static baroRaw: Query = { addresses: [0x15], group: QueryGroup.common, propertyName: "baroRaw", displayName: "BARO", formula: x => .49 * x[0], type: QueryType.pressure, units: QueryUnit.kPa };
  public static iscStepCurr: Query = { addresses: [0x16], group: QueryGroup.common, propertyName: "iscStepCurr", displayName: "ISC-C", formula: x => x[0], type: QueryType.number, units: QueryUnit.step };
  public static tpsRaw: Query = { addresses: [0x17], group: QueryGroup.common, propertyName: "tpsRaw", displayName: "TPS-R", formula: x => 100 * x[0] / 255, type: QueryType.number, units: QueryUnit.percent };
  public static closedLpFlags: Query = { addresses: [0x18], group: QueryGroup.flags, propertyName: "closedLpFlags", displayName: "CLMF", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static ftrimFlags: Query = { addresses: [0x19], group: QueryGroup.flags, propertyName: "ftrimFlags", displayName: "FTRIM-F", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static mafRaw: Query = { addresses: [0x1A], group: QueryGroup.common, propertyName: "mafRaw", displayName: "MAF", formula: x => 6.25 * x[0], type: QueryType.number, units: QueryUnit.hz };
  public static ftrim_low_0x1B: Query = { addresses: [0x1B], group: QueryGroup.debug, propertyName: "ftrim_low_0x1B", displayName: "FTRIM-L1B", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };
  public static airVol: Query = { addresses: [0x1C], group: QueryGroup.advanced, propertyName: "airVol", displayName: "AIR-VOL", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static accEnr: Query = { addresses: [0x1D], group: QueryGroup.common, propertyName: "accEnr", displayName: "ACCENR", formula: x => 100 * x[0] / 255, type: QueryType.number, units: QueryUnit.percent };
  public static state1: Query = { addresses: [0x1E], group: QueryGroup.flags, propertyName: "state1", displayName: "STATE1", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static ftrim_low_0x1F: Query = { addresses: [0x1F], group: QueryGroup.debug, propertyName: "ftrim_low_0x1F", displayName: "FTRIM-L1F", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };

  public static rpm8: Query = { addresses: [0x20], group: QueryGroup.common, propertyName: "rpm8", displayName: "RPM-8", formula: x => x[0] * 7.8125, type: QueryType.number, units: QueryUnit.rpm };
  public static rpm31: Query = { addresses: [0x21], group: QueryGroup.common, propertyName: "rpm31", displayName: "RPM-31", formula: x => x[0] * 31.25, type: QueryType.number, units: QueryUnit.rpm };
  public static port3Snap1: Query = { addresses: [0x22], group: QueryGroup.flags, propertyName: "port3Snap1", displayName: "PORT3-S1", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static iscLrnFlags: Query = { addresses: [0x23], group: QueryGroup.flags, propertyName: "iscLrnFlags", displayName: "ISC-LF", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static idleSpdTarg: Query = { addresses: [0x24], group: QueryGroup.common, propertyName: "idleSpdTarg", displayName: "RPM-CT", formula: x => x[0] * 7.8125, type: QueryType.number, units: QueryUnit.rpm };
  public static iscStepTarg: Query = { addresses: [0x25], group: QueryGroup.common, propertyName: "iscStepTarg", displayName: "ISC-T", formula: x => x[0], type: QueryType.number, units: QueryUnit.step };
  public static knockSum: Query = { addresses: [0x26], group: QueryGroup.common, propertyName: "knockSum", displayName: "KNOCK-S", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static port3Snap0: Query = { addresses: [0x27], group: QueryGroup.flags, propertyName: "port3Snap0", displayName: "PORT3-S0", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static port4Snap: Query = { addresses: [0x28], group: QueryGroup.flags, propertyName: "port4Snap", displayName: "PORT4-S", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static injPw: Query = { addresses: [0x29, 0x2A], group: QueryGroup.advanced, propertyName: "injPw", displayName: "INJ-PW", formula: x => .256 * x[0], type: QueryType.number, units: QueryUnit.ms };
  public static enerLen: Query = { addresses: [0x2B], group: QueryGroup.advanced, propertyName: "enerLen", displayName: "ENER-L", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static airCnt16: Query = { addresses: [0x2C, 0x2D], group: QueryGroup.advanced, propertyName: "airCnt16", displayName: "AIR-C16", formula: x => QueryValueHelper.uint16(x) * 256, type: QueryType.number, units: QueryUnit.numberDec };
  public static injFactor: Query = { addresses: [0x2E, 0x2F], group: QueryGroup.debug, propertyName: "injFactor", displayName: "INJ-F", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };

  public static iscFlags0: Query = { addresses: [0x30], group: QueryGroup.flags, propertyName: "iscFlags0", displayName: "ISC-F0", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static temp1: Query = { addresses: [0x31], group: QueryGroup.debug, propertyName: "temp1", displayName: "TEMP-1", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp2: Query = { addresses: [0x32], group: QueryGroup.debug, propertyName: "temp2", displayName: "TEMP-2", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp3: Query = { addresses: [0x33], group: QueryGroup.debug, propertyName: "temp3", displayName: "TEMP-3", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp4: Query = { addresses: [0x34], group: QueryGroup.debug, propertyName: "temp4", displayName: "TEMP-4", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp5: Query = { addresses: [0x35], group: QueryGroup.debug, propertyName: "temp5", displayName: "TEMP-5", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static o2BadCnt: Query = { addresses: [0x36], group: QueryGroup.advanced, propertyName: "o2BadCnt", displayName: "O2-BC", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static egrtBadCnt: Query = { addresses: [0x37], group: QueryGroup.advanced, propertyName: "egrtBadCnt", displayName: "EGRT-BC", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static faultHi: Query = { addresses: [0x38], group: QueryGroup.flags, propertyName: "faultHi", displayName: "FAULT-H", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static faultLo: Query = { addresses: [0x39], group: QueryGroup.flags, propertyName: "faultLo", displayName: "FAULT-L", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static iatRaw: Query = { addresses: [0x3A], group: QueryGroup.common, propertyName: "iatRaw", displayName: "IAT-R", formula: x => QueryValueCurves.IAT[x[0]], type: QueryType.temperature, units: QueryUnit.celsius };
  public static stFaultHi: Query = { addresses: [0x3B], group: QueryGroup.flags, propertyName: "stFaultHi", displayName: "FAULT-SH", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static stFaultLo: Query = { addresses: [0x3C], group: QueryGroup.flags, propertyName: "stFaultLo", displayName: "FAULT-SL", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static ftrim_low_0x3D: Query = { addresses: [0x3D], group: QueryGroup.debug, propertyName: "ftrim_low_0x3D", displayName: "FTRIM-L3D", formula: x => .78 * x[0], type: QueryType.number, units: QueryUnit.percent };

  // 0x40 is ftrim_low. Accessible in 0x0C via obdTable mapping
  // 0x41 is ftrim_mid. Accessible in 0x0D via obdTable mapping
  // 0x42 is ftrim_high. Accessible in 0x0E via obdTable mapping
  public static ftrimCntr: Query = { addresses: [0x43], group: QueryGroup.advanced, propertyName: "ftrimCntr", displayName: "FTRIM-C", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static isc0: Query = { addresses: [0x44, 0x45], group: QueryGroup.debug, propertyName: "isc0", displayName: "ISC-0", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static isc1: Query = { addresses: [0x46, 0x47], group: QueryGroup.debug, propertyName: "isc1", displayName: "ISC-1", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };

  public static iscStepCom: Query = { addresses: [0x48], group: QueryGroup.debug, propertyName: "iscStepCom", displayName: "ISC-SC", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  // 0x49 iscStepCurr. Accessible in 0x16 via obdTable mapping
  public static iscPatrnIdx: Query = { addresses: [0x4A], group: QueryGroup.debug, propertyName: "iscPatrnIdx", displayName: "ISC-PI", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  // 0x4B is iscFlags0. Accessible in 0x30 via obdTable mapping
  public static faults: Query = { addresses: [0x4C, 0x4D], group: QueryGroup.advanced, propertyName: "faults", displayName: "FAULTS", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberHex };
  public static stFaults: Query = { addresses: [0x4E, 0x4F], group: QueryGroup.advanced, propertyName: "stFaults", displayName: "FAULTS-S", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberHex };

  // 0x50 is o2BadCnt. Accessible in 0x36 via obdTable mapping
  // 0x51 is egrtBadCnt. Accessible in 0x37 via obdTable mapping
  public static octane: Query = { addresses: [0x52], group: QueryGroup.common, propertyName: "octane", displayName: "OCTANE", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static knockFlags: Query = { addresses: [0x53], group: QueryGroup.flags, propertyName: "knockFlags", displayName: "KNOCK-F", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static config1: Query = { addresses: [0x55], group: QueryGroup.flags, propertyName: "config1", displayName: "CONFIG-1", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static config2: Query = { addresses: [0x56], group: QueryGroup.flags, propertyName: "config2", displayName: "CONFIG-2", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  // 0x57 is temp1. Accessible in 0x31 via obdTable mapping
  // 0x58 is temp2. Accessible in 0x32 via obdTable mapping
  // 0x59 is temp3. Accessible in 0x33 via obdTable mapping
  // 0x5A is temp4. Accessible in 0x34 via obdTable mapping
  // 0x5B is temp5. Accessible in 0x35 via obdTable mapping
  public static temp6: Query = { addresses: [0x5c], group: QueryGroup.debug, propertyName: "temp6", displayName: "TEMP-6", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp7: Query = { addresses: [0x5d], group: QueryGroup.debug, propertyName: "temp7", displayName: "TEMP-7", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp8: Query = { addresses: [0x5e], group: QueryGroup.debug, propertyName: "temp8", displayName: "TEMP-8", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp9: Query = { addresses: [0x5f], group: QueryGroup.debug, propertyName: "temp9", displayName: "TEMP-9", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };

  public static casFlags0: Query = { addresses: [0x61], group: QueryGroup.flags, propertyName: "casFlags0", displayName: "CAS-F0", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static ignFallFlags: Query = { addresses: [0x62], group: QueryGroup.flags, propertyName: "ignFallFlags", displayName: "IGN-FF", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static enerFlags: Query = { addresses: [0x63], group: QueryGroup.flags, propertyName: "enerFlags", displayName: "ENER-F", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static tCasLast: Query = { addresses: [0x64, 0x65], group: QueryGroup.debug, propertyName: "tCasLast", displayName: "CAS-L", formula: x => QueryValueHelper.uint16(x) * 250, type: QueryType.number, units: QueryUnit.kHz };
  public static tCasNew: Query = { addresses: [0x66, 0x67], group: QueryGroup.debug, propertyName: "tCasNew", displayName: "CAS-N", formula: x => QueryValueHelper.uint16(x) * 250, type: QueryType.number, units: QueryUnit.kHz };
  public static casRiseTime: Query = { addresses: [0x68, 0x69], group: QueryGroup.debug, propertyName: "casRiseTime", displayName: "CAS-RT", formula: x => QueryValueHelper.uint16(x) * 250, type: QueryType.number, units: QueryUnit.kHz };
  public static casFallTime: Query = { addresses: [0x6A, 0x6B], group: QueryGroup.debug, propertyName: "casFallTime", displayName: "CAS-FT", formula: x => QueryValueHelper.uint16(x) * 250, type: QueryType.number, units: QueryUnit.kHz };
  public static timCas: Query = { addresses: [0x6C, 0x6D], group: QueryGroup.debug, propertyName: "timCas", displayName: "CAS-TIM", formula: x => QueryValueHelper.uint16(x) / 256 * 90, type: QueryType.number, units: QueryUnit.degree };
  public static ignRelTime: Query = { addresses: [0x6E, 0x6F], group: QueryGroup.advanced, propertyName: "ignRelTime", displayName: "IGN-RT", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.us };

  public static ignFallRelTime: Query = { addresses: [0x70, 0x71], group: QueryGroup.advanced, propertyName: "ignFallRelTime", displayName: "IGN-FRT", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.us };
  public static enerLenX: Query = { addresses: [0x72, 0x73], group: QueryGroup.advanced, propertyName: "enerLenX", displayName: "ENER-LX", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static enerAbsTime: Query = { addresses: [0x74, 0x75], group: QueryGroup.advanced, propertyName: "enerAbsTime", displayName: "ENER-AT", formula: x => QueryValueHelper.uint16(x) * 250, type: QueryType.number, units: QueryUnit.kHz };
  public static ignTime: Query = { addresses: [0x76, 0x77], group: QueryGroup.advanced, propertyName: "ignTime", displayName: "IGN-T", formula: x => QueryValueHelper.uint16(x) * 250, type: QueryType.number, units: QueryUnit.kHz };
  public static enerAbsTimeNext: Query = { addresses: [0x78, 0x79], group: QueryGroup.advanced, propertyName: "enerAbsTimeNext", displayName: "ENER-ATN", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static tCasLast128: Query = { addresses: [0x7A], group: QueryGroup.debug, propertyName: "tCasLast128", displayName: "CAS-L128", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static tdcMask: Query = { addresses: [0x7B, 0x7C], group: QueryGroup.debug, propertyName: "tdcMask", displayName: "TDC-M", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static tim61: Query = { addresses: [0x7D], group: QueryGroup.debug, propertyName: "tim61", displayName: "TIM-61", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static temp20: Query = { addresses: [0x7E], group: QueryGroup.debug, propertyName: "temp20", displayName: "TEMP-20", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp21: Query = { addresses: [0x7F], group: QueryGroup.debug, propertyName: "temp21", displayName: "TEMP-21", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };

  public static temp22: Query = { addresses: [0x80], group: QueryGroup.debug, propertyName: "temp22", displayName: "TEMP-22", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp23: Query = { addresses: [0x81], group: QueryGroup.debug, propertyName: "temp23", displayName: "TEMP-23", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static temp24: Query = { addresses: [0x82], group: QueryGroup.debug, propertyName: "temp24", displayName: "TEMP-24", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
  public static tdcCasCount: Query = { addresses: [0x83], group: QueryGroup.debug, propertyName: "tdcCasCount", displayName: "TDC-CC", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static t40s_casInt: Query = { addresses: [0x84], group: QueryGroup.debug, propertyName: "t40s_casInt", displayName: "CAS-IT", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static coilChkFlags: Query = { addresses: [0x85], group: QueryGroup.flags, propertyName: "coilChkFlags", displayName: "COIL-CF", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static p4Latched: Query = { addresses: [0x86], group: QueryGroup.flags, propertyName: "p4Latched", displayName: "PORT4-L", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static timAdjFlags: Query = { addresses: [0x87], group: QueryGroup.flags, propertyName: "timAdjFlags", displayName: "TIM-AF", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static tim61Tot0: Query = { addresses: [0x88], group: QueryGroup.debug, propertyName: "tim61Tot0", displayName: "TIM-61T0", formula: x => x[0] / 256 * 90, type: QueryType.number, units: QueryUnit.degree };
  // 0x89 is enerLen. Accessible in 0x2B via obdTable mapping
  // 0x8A is timingAdv. Accessible in 0x06 via obdTable mapping
  // 0x8B is knockSum. Accessible in 0x26 via obdTable mapping
  public static t200s_knock: Query = { addresses: [0x8C], group: QueryGroup.advanced, propertyName: "t200s_knock", displayName: "KNOCK-T", formula: x => x[0], type: QueryType.number, units: QueryUnit.hz };
  public static airCnt24: Query = { addresses: [0x8D, 0x8E, 0x8F], group: QueryGroup.advanced, propertyName: "airCnt24", displayName: "AIR-C24", formula: x => QueryValueHelper.uint24(x), type: QueryType.number, units: QueryUnit.numberDec };

  public static airCntNew: Query = { addresses: [0x90, 0x91], group: QueryGroup.debug, propertyName: "airCntNew", displayName: "AIR-CN", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static oldAirCnt: Query = { addresses: [0x92, 0x93], group: QueryGroup.debug, propertyName: "oldAirCnt", displayName: "AIR-OC", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static airDiffPos: Query = { addresses: [0x94], group: QueryGroup.debug, propertyName: "airDiffPos", displayName: "AIR-DP", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static airDiffNeg: Query = { addresses: [0x95], group: QueryGroup.debug, propertyName: "airDiffNeg", displayName: "AIR-DN", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static t1_lastCas: Query = { addresses: [0x96, 0x97], group: QueryGroup.debug, propertyName: "t1_lastCas", displayName: "CAS-LT1", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.mHz };
  public static t2_lastMas: Query = { addresses: [0x98, 0x99], group: QueryGroup.debug, propertyName: "t2_lastMas", displayName: "MAS-LT2", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.mHz };
  public static t2_diff8: Query = { addresses: [0x9A, 0x9B], group: QueryGroup.debug, propertyName: "t2_diff8", displayName: "T2-D8", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static airQuantum: Query = { addresses: [0x9C], group: QueryGroup.debug, propertyName: "airQuantum", displayName: "AIR-Q", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.numberDec };
  public static masCasFlags: Query = { addresses: [0x9E], group: QueryGroup.flags, propertyName: "masCasFlags", displayName: "MAS-CAS-F", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static airFiltFact: Query = { addresses: [0x9F], group: QueryGroup.debug, propertyName: "airFiltFact", displayName: "AIR-FF", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };

  public static airCntMax: Query = { addresses: [0xA0], group: QueryGroup.debug, propertyName: "airCntMax", displayName: "AIR-CM", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  // 0xA1 is accEnr. Accessible in 0x1D via obdTable mapping
  public static state3: Query = { addresses: [0xA2], group: QueryGroup.flags, propertyName: "state3", displayName: "STATE-3", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  // 0xA3 is injFactor1. Accessible in 0x2E via obdTable mapping
  // 0xA4 is injFactor2. Accessible in 0x2F via obdTable mapping
  public static oldReedVal: Query = { addresses: [0xA5], group: QueryGroup.debug, propertyName: "oldReedVal", displayName: "REED-OV", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static deadTime: Query = { addresses: [0xA6], group: QueryGroup.advanced, propertyName: "deadTime", displayName: "INJ-DT", formula: x => x[0] * 24, type: QueryType.number, units: QueryUnit.us };
  // 0xA7 is injPw. Accessible in 0x29 via obdTable mapping
  // 0xA8 is injPw. Accessible in 0x2A via obdTable mapping
  public static inj1_offT: Query = { addresses: [0xA9, 0xAA], group: QueryGroup.advanced, propertyName: "inj1_offT", displayName: "INJ-1OT", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.mHz };
  public static inj3_offT: Query = { addresses: [0xAB, 0xAC], group: QueryGroup.advanced, propertyName: "inj3_offT", displayName: "INJ-3OT", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.mHz };
  public static inj4_offT: Query = { addresses: [0xAD, 0xAE], group: QueryGroup.advanced, propertyName: "inj4_offT", displayName: "INJ-4OT", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.mHz };
  public static inj2_offT: Query = { addresses: [0xAF, 0xB0], group: QueryGroup.advanced, propertyName: "inj2_offT", displayName: "INJ-2OT", formula: x => QueryValueHelper.uint16(x), type: QueryType.number, units: QueryUnit.mHz };

  public static last_t1t2_clk: Query = { addresses: [0xB1], group: QueryGroup.debug, propertyName: "last_t1t2_clk", displayName: "T1T2-LC", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static injToAct: Query = { addresses: [0xB2], group: QueryGroup.flags, propertyName: "injToAct", displayName: "INJ-TA", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static tdcCasFlags: Query = { addresses: [0xB3], group: QueryGroup.flags, propertyName: "tdcCasFlags", displayName: "TDC-CAS-F", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static casCylIndex: Query = { addresses: [0xB4], group: QueryGroup.flags, propertyName: "casCylIndex", displayName: "CAS-CI", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static newInjToAct: Query = { addresses: [0xB5], group: QueryGroup.flags, propertyName: "newInjToAct", displayName: "INJ-NTA", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static tdcCheck: Query = { addresses: [0xB6], group: QueryGroup.debug, propertyName: "tdcCheck", displayName: "TDC-C", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static oldInjToAct: Query = { addresses: [0xB7], group: QueryGroup.flags, propertyName: "oldInjToAct", displayName: "INJ-OTA", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static injToTest: Query = { addresses: [0xB8], group: QueryGroup.flags, propertyName: "injToTest", displayName: "INJ-TT", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static injBad: Query = { addresses: [0xB9], group: QueryGroup.flags, propertyName: "injBad", displayName: "INJ-B", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static obdInjCmd: Query = { addresses: [0xBA], group: QueryGroup.flags, propertyName: "obdInjCmd", displayName: "INJ-OC", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };
  public static rtiCnt: Query = { addresses: [0xBB], group: QueryGroup.debug, propertyName: "rtiCnt", displayName: "RTI-C", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static rtiCnt48: Query = { addresses: [0xBC], group: QueryGroup.debug, propertyName: "rtiCnt48", displayName: "RTI-C48", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberDec };
  public static rtiReedFlags: Query = { addresses: [0xBD], group: QueryGroup.flags, propertyName: "rtiReedFlags", displayName: "RTI-RF", formula: x => x[0], type: QueryType.flags, units: QueryUnit.flags };

  public static ecuVersion: Query = { addresses: [0xFD], group: QueryGroup.debug, propertyName: "ecuVersion", displayName: "ECUVER", formula: x => x[0], type: QueryType.number, units: QueryUnit.numberHex };
}
