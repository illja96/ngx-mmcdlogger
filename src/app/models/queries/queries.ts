import { Curves } from "../curves";
import { Query } from "./query";

export class Queries {
  public port1: Query = { address: 0x00, name: "port1", description: "Port 1 data register", formula: x => x };
  public port2: Query = { address: 0x01, name: "port2", description: "Port 2 data register", formula: x => x };
  public port3: Query = { address: 0x02, name: "port3", description: "Port 3 data register", formula: x => x };
  public port4: Query = { address: 0x03, name: "port4", description: "Port 4 data register", formula: x => x };
  public port5: Query = { address: 0x04, name: "port5", description: "Port 5 data register", formula: x => x };
  public port6: Query = { address: 0x05, name: "port6", description: "Port 6 data register", formula: x => x };
  public timingAdv: Query = { address: 0x06, name: "timingAdv", description: "Timing advance", formula: x => x - 10 };
  public ectRaw: Query = { address: 0x07, name: "ectRaw", description: "Engine coolant temperature (raw)", formula: x => Curves.ECT[x], units: "°C" };
  public isc0: Query = { address: 0x08, name: "isc0", description: "Long term correction factors/feedback for the ISC step adjustment", formula: x => x };
  public iscY0: Query = { address: 0x09, name: "iscY0", description: "Short term correction factors/feedback for the ISC step adjustment", formula: x => x };
  public isc1: Query = { address: 0x0A, name: "isc1", description: "Long term learning variable when A/C is on", formula: x => x };
  public iscY1: Query = { address: 0x0B, name: "iscY1", description: "ISC learning variable when A/C is on and PS is off", formula: x => x };
  public ftrim_low: Query = { address: 0x0C, name: "ftrim_low", description: "Fuel trim (low)", formula: x => .78 * x, units: "%" };
  public ftrim_mid: Query = { address: 0x0D, name: "ftrim_mid", description: "Fuel trim (middle)", formula: x => .78 * x, units: "%" };
  public ftrim_hi: Query = { address: 0x0E, name: "ftrim_hi", description: "Fuel trim (high)", formula: x => .78 * x, units: "%" };
  public o2Fbk: Query = { address: 0x0F, name: "o2Fbk", description: "Oxygen feedback trim", formula: x => .78 * x, units: "%" };

  public ectFiltered: Query = { address: 0x10, name: "ectFiltered", description: "Engine coolant temperature (filtered)", formula: x => Curves.ECT[x], units: "°C" };
  public iatChecked: Query = { address: 0x11, name: "iatChecked", description: "Intake air temperature (validated)", formula: x => Curves.IAT[x], units: "°C" };
  public egrtRaw: Query = { address: 0x12, name: "egrtRaw", description: "Exhaust gas recirculation temperature", formula: x => -2.7 * x + 597.7, units: "°F" };
  public o2Raw: Query = { address: 0x13, name: "o2Raw", description: "Oxygen sensor", formula: x => .0195 * x, units: "V" };
  public battRaw: Query = { address: 0x14, name: "battRaw", description: "Battery voltage", formula: x => .0733 * x, units: "V" };
  public baroRaw: Query = { address: 0x15, name: "baroRaw", description: "Atmospheric pressure", formula: x => .00486 * x, units: "bar" };
  public iscStepCurr: Query = { address: 0x16, name: "iscStepCurr", description: "Current ISC step", formula: x => x, units: "step(s)" };
  public tpsRaw: Query = { address: 0x17, name: "tpsRaw", description: "Throttle position sensor", formula: x => 100 * x / 255, units: "%" };
  public closedLpFlags: Query = { address: 0x18, name: "closedLpFlags", description: "Flags related to closed loop mode", formula: x => x };
  public ftrimFlags: Query = { address: 0x19, name: "ftrimFlags", description: "Flag register for fuel trim", formula: x => x };
  public mafRaw: Query = { address: 0x1A, name: "mafRaw", description: "Airflow sensor pulse frequency", formula: x => 6.25 * x, units: "Hz" };
  public ftrim_low_0x1B: Query = { address: 0x1B, name: "ftrim_low", description: "Fuel trim (low 0x1B)", formula: x => .78 * x, units: "%" };
  public airVol: Query = { address: 0x1C, name: "airVol", description: "Air volume", formula: x => x };
  public accEnr: Query = { address: 0x1D, name: "accEnr", description: "Acceleration enrichment", formula: x => 100 * x / 255, units: "%" };
  public state1: Query = { address: 0x1E, name: "state1", description: "State flags mainly used to track engine start-up stages and running condition", formula: x => x };
  public ftrim_low_0x1F: Query = { address: 0x1F, name: "ftrim_low", description: "Fuel trim (low 0x1F)", formula: x => .78 * x, units: "%" };

  public rpm8: Query = { address: 0x20, name: "rpm8", description: "RPM (8)", formula: x => x * 7.8125, units: "RPM" };
  public rpm31: Query = { address: 0x21, name: "rpm31", description: "RPM (31)", formula: x => x * 31.25, units: "RPM" };
  public port3Snap1: Query = { address: 0x22, name: "port3Snap1", description: "", formula: x => x };
  public iscLrnFlags: Query = { address: 0x23, name: "iscLrnFlags", description: "ISC learning flags", formula: x => x };
  public idleSpdTarg: Query = { address: 0x24, name: "idleSpdTarg", description: "Current target idle speed", formula: x => x * 7.8125, units: "RPM" };
  public iscStepTarg: Query = { address: 0x25, name: "iscStepTarg", description: "Target ISC step", formula: x => x, units: "step(s)" };
  public knockSum: Query = { address: 0x26, name: "knockSum", description: "Current knock sum value", formula: x => x };
  public port3Snap0: Query = { address: 0x27, name: "port3Snap0", description: "Snapshot of port3", formula: x => x };
  public port4Snap: Query = { address: 0x28, name: "port4Snap", description: "Snapshot of port4", formula: x => x };
  public injPw: Query = { address: 0x29, name: "injPw", description: "Injector pulse width", formula: x => .256 * x, units: "ms" };
  public injPw1: Query = { address: 0x2A, name: "injPw1", description: "Injector pulse width (+1)", formula: x => .256 * x, units: "ms" };
  public enerLen: Query = { address: 0x2B, name: "enerLen", description: "Coil energization time", formula: x => x };
  public airCnt0: Query = { address: 0x2C, name: "airCnt0", description: "Air count (0)", formula: x => x };
  public airCnt1: Query = { address: 0x2D, name: "airCnt1", description: "Air count (1)", formula: x => x };
  public injFactor: Query = { address: 0x2E, name: "injFactor", description: "Global injector factor", formula: x => x };
  public injFactor1: Query = { address: 0x2F, name: "injFactor1", description: "Global injector factor (+1)", formula: x => x };

  public iscFlags0: Query = { address: 0x30, name: "iscFlags0", description: "Flag register for ISC updating", formula: x => x };
  public temp1: Query = { address: 0x31, name: "temp1", description: "Temporary value 1", formula: x => x };
  public temp2: Query = { address: 0x32, name: "temp2", description: "Temporary value 2", formula: x => x };
  public temp3: Query = { address: 0x33, name: "temp3", description: "Temporary value 3", formula: x => x };
  public temp4: Query = { address: 0x34, name: "temp4", description: "Temporary value 4", formula: x => x };
  public temp5: Query = { address: 0x35, name: "temp5", description: "Temporary value 5", formula: x => x };
  public o2BadCnt: Query = { address: 0x36, name: "o2BadCnt", description: "Used to test the O2 sensor", formula: x => x };
  public egrtBadCnt: Query = { address: 0x37, name: "egrtBadCnt", description: " Used to test the EGR temperature sensor", formula: x => x };
  public faultHi: Query = { address: 0x38, name: "faultHi", description: "Faults, high byte", formula: x => x };
  public faultLo: Query = { address: 0x39, name: "faultLo", description: "Faults, low byte", formula: x => x };
  public iatRaw: Query = { address: 0x3A, name: "iatRaw", description: "Intake air temperature (raw)", formula: x => Curves.IAT[x], units: "°C" };
  public stFaultHi: Query = { address: 0x3B, name: "stFaultHi", description: "Stored faults, High byte", formula: x => x };
  public stFaultLo: Query = { address: 0x3C, name: "stFaultLo", description: "Stored faults, Low byte", formula: x => x };
  public ftrim_low_0x3D: Query = { address: 0x3D, name: "ftrim_low", description: "Fuel trim (low 0x3D)", formula: x => .78 * x, units: "%" };

  public ecuVersion: Query = { address: 0xFD, name: "ecuVersion", description: "ECU Version", formula: x => x };
}
