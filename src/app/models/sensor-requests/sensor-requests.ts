import { SensorInfo } from "../sensor-info/sensor-info";

export class SensorRequests {
  // FLAG 0
  public injectorDutyCycle: SensorInfo = { name: "Injector duty cycle", address: 0x00, formula: x => x, units: "?" };

  // FLAG 2
  public tdc: SensorInfo = { name: "TDC", address: 0x02, formula: x => x << 0x04, units: "" };
  public powerSteering: SensorInfo = { name: "Power steering", address: 0x04, formula: x => x << 0x08, units: "" };
  public acSwitch: SensorInfo = { name: "AC Switch", address: 0x02, formula: x => x << 0x10, units: "" };
  public parkNeutral: SensorInfo = { name: "Park / Neutral", address: 0x02, formula: x => x << 0x20, units: "" };
  public idleSwitch: SensorInfo = { name: "Idle Switch", address: 0x02, formula: x => x << 0x80, units: "" };
  public acClutch: SensorInfo = { name: "AC Clutch", address: 0x02, formula: x => x << 0x80, units: "" };

  public timingAdvance1: SensorInfo = { name: "Timing advance", address: 0x06, formula: x => x - 10, units: "° BTDC" };
  public timingAdvance2: SensorInfo = { name: "Timing advance", address: 0x06, formula: x => x - 20, units: "° BTDC" };

  public engineCoolantTemperature1: SensorInfo = { name: "Engine coolant temperature", address: 0x07, formula: x => x - 40, units: "°C" };
  public engineCoolantTemperature2: SensorInfo = { name: "Engine coolant temperature", address: 0x07, formula: x => -1.468 * x + 139.74, units: "°F" };
  public engineCoolantTemperature3: SensorInfo = { name: "Engine coolant temperature", address: 0x07, formula: x => -1.45 * x + 308, units: "°F" };

  public fuelTrimLow1: SensorInfo = { name: "Fuel trim low", address: 0x0c, formula: x => 0.78 * x, units: "%" };
  public fuelTrimLow2: SensorInfo = { name: "Fuel trim low", address: 0x0c, formula: x => x, units: "%" };
  public fuelTrimMiddle1: SensorInfo = { name: "Fuel trim middle", address: 0x0d, formula: x => 0.78 * x, units: "%" };
  public fuelTrimMiddle2: SensorInfo = { name: "Fuel trim middle", address: 0x0d, formula: x => x, units: "%" };
  public fuelTrimHigh1: SensorInfo = { name: "Fuel trim high", address: 0x0e, formula: x => 0.78 * x, units: "%" };
  public fuelTrimHigh2: SensorInfo = { name: "Fuel trim high", address: 0x0e, formula: x => x, units: "%" };
  public oxygenFeedbackTrim: SensorInfo = { name: "Oxygen feedback trim", address: 0x0f, formula: x => x * 0.78, units: "%" };

  public egrTemperature: SensorInfo = { name: "EGR temperature", address: 0x12, formula: x => -2.7 * x + 597.7, units: "°F" };
  public frontOxygen: SensorInfo = { name: "Front oxygen", address: 0x13, formula: x => x * 0.01952, units: "V" };
  public battery: SensorInfo = { name: "Battery", address: 0x14, formula: x => 0.07333 * x, units: "V" };
  public atmosphericPressure1: SensorInfo = { name: "Atmospheric pressure", address: 0x15, formula: x => x * 0.00486, units: "BAR" };
  public atmosphericPressure2: SensorInfo = { name: "Atmospheric pressure", address: 0x15, formula: x => x * 0.07251887, units: "PSI" };
  public atmosphericPressure3: SensorInfo = { name: "Atmospheric pressure", address: 0x15, formula: x => x / 2, units: "kPa" };
  public idleSpeedControl: SensorInfo = { name: "Idle speed control", address: 0x16, formula: x => x * 0.00486, units: "step(s)" };
  public throttlePosition: SensorInfo = { name: "Throttle position", address: 0x17, formula: x => x * 100 / 255, units: "%" };

  public massAirFlow: SensorInfo = { name: "Mass air flow", address: 0x1A, formula: x => x * 6.29, units: "Hz" };

  public engineLoad: SensorInfo = { name: "Engine load", address: 0x1C, formula: x => x * 0.625, units: "?" };
  public accelerationEnrichment: SensorInfo = { name: "Acceleration enrichment", address: 0x1D, formula: x => x * 100 / 255, units: "%" };

  public rearOxygen1: SensorInfo = { name: "Rear oxygen", address: 0x1F, formula: x => x * 0.01952, units: "V" };
  public crankshaft2: SensorInfo = { name: "Crankshaft #2", address: 0x20, formula: x => x * 7.8, units: "RPM" };
  public engineSpeed: SensorInfo = { name: "Engine speed", address: 0x21, formula: x => x * 31.25, units: "RPM" };

  public targetIdleSpeed: SensorInfo = { name: "Target idle speed", address: 0x24, formula: x => x * 7.8, units: "RPM" };

  public knockCount: SensorInfo = { name: "Knock sum", address: 0x26, formula: x => x, units: "count(s)" };
  public octane: SensorInfo = { name: "Octane #", address: 0x27, formula: x => x, units: "" };

  public fuelInjectorPulseWidth: SensorInfo = { name: "Fuel injector pulse width", address: 0x29, formula: x => x * 0.256, units: "ms" };

  public airVolume: SensorInfo = { name: "Air volume", address: 0x2C, formula: x => x, units: "" };

  public speed: SensorInfo = { name: "Speed", address: 0x2F, formula: x => x * 1.242742384, units: "MPH" };

  public afr: SensorInfo = { name: "AFR", address: 0x32, formula: x => 128 * 14.7 / x, units: "" };
  public ignitionTiming: SensorInfo = { name: "Ignition timing", address: 0x33, formula: x => x - 20, units: "° BTDC" };

  public manifoldAbsolutePressure: SensorInfo = { name: "Manifold absolute Pressure", address: 0x38, formula: x => x * 0.19343, units: "" };

  public intakeAirTemperature1: SensorInfo = { name: "Intake air temperature", address: 0x3a, formula: x => -1.69 * x + 358, units: "°F" };
  public intakeAirTemperature2: SensorInfo = { name: "Intake air temperature", address: 0x3a, formula: x => -0.58 * x + 90.96, units: "" };
  public intakeAirTemperature3: SensorInfo = { name: "Intake air temperature", address: 0x3a, formula: x => x - 40, units: "°C" };

  public rearOxygen2: SensorInfo = { name: "Rear oxygen", address: 0x3E, formula: x => x * 0.01952, units: "V" };
}
