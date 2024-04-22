import { Command } from "./command";

export class Commands {
  public static clearFaults: Command = { address: 0xCA, name: "clearFaults", successResult: 0x00, failedResult: 0xFF };

  public static activateBoostControlSolenoid: Command = { address: 0xF1, name: "activateBoostControlSolenoid", successResult: 0x00, failedResult: 0xFF };
  public static mivecMotor: Command = { address: 0xF2, name: "mivecMotor", successResult: 0x00, failedResult: 0xFF };
  public static activateEgrSolenoid: Command = { address: 0xF3, name: "activateEgrSolenoid", successResult: 0x00, failedResult: 0xFF };
  public static activateFuelPressureSolenoid: Command = { address: 0xF4, name: "activateFuelPressureSolenoid", successResult: 0x00, failedResult: 0xFF };
  public static activatePurgeSolenoid: Command = { address: 0xF5, name: "activatePurgeSolenoid", successResult: 0x00, failedResult: 0xFF };
  public static turnOnFuelPump: Command = { address: 0xF6, name: "turnOnFuelPump", successResult: 0x00, failedResult: 0xFF };
  public static disableInjector6: Command = { address: 0xF7, name: "disableInjector6", successResult: 0x00 };
  public static disableInjector5: Command = { address: 0xF8, name: "disableInjector5", successResult: 0x00 };
  public static disableInjector4: Command = { address: 0xF9, name: "disableInjector4", successResult: 0x00 };
  public static disableInjector3: Command = { address: 0xFA, name: "disableInjector3", successResult: 0x00 };
  public static disableInjector2: Command = { address: 0xFB, name: "disableInjector2", successResult: 0x00 };
  public static disableInjector1: Command = { address: 0xFC, name: "disableInjector1", successResult: 0x00 };

  public static resistorStrappingLowWord: Command = { address: 0xFE, name: "resistorStrappingLowWord", successResult: 0xFF };
  public static resistorStrappingHighWord: Command = { address: 0xFF, name: "resistorStrappingHighWord", successResult: 0xFF };
}
