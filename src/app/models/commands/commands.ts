import { Command } from "./command";

export class Commands {
  public static clearFaults: Command = { address: 0xCA, name: "clearFaults", description: "Clear faults" };

  public static activateBoostControlSolenoid: Command = { address: 0xF1, name: "activateBoostControlSolenoid", description: "Activate boost control solenoid" };
  //public static mivecMotor: Command = { address: 0xF2, name: "mivecMotor", description: "MIVEC/VICS motor" };
  public static activateEgrSolenoid: Command = { address: 0xF3, name: "activateEgrSolenoid", description: "Activate EGR solenoid" };
  public static activateFuelPressureSolenoid: Command = { address: 0xF4, name: "activateFuelPressureSolenoid", description: "Activate fuel pressure solenoid" };
  public static activatePurgeSolenoid: Command = { address: 0xF5, name: "activatePurgeSolenoid", description: "Activate purge solenoid" };
  public static turnOnFuelPump: Command = { address: 0xF6, name: "turnOnFuelPump", description: "Turn on fuel pump" };
  public static disableInjector6: Command = { address: 0xF7, name: "disableInjector6", description: "Disable injector #6" };
  public static disableInjector5: Command = { address: 0xF8, name: "disableInjector5", description: "Disable injector #5" };
  public static disableInjector4: Command = { address: 0xF9, name: "disableInjector4", description: "Disable injector #4" };
  public static disableInjector3: Command = { address: 0xFA, name: "disableInjector3", description: "Disable injector #3" };
  public static disableInjector2: Command = { address: 0xFB, name: "disableInjector2", description: "Disable injector #2" };
  public static disableInjector1: Command = { address: 0xFC, name: "disableInjector1", description: "Disable injector #1" };
  //public static serialLinkTest: Command = { address: 0xFD, name: "serialLinkTest", description: "Serial link test" };
  //public static resistorStrappingLowWord: Command = { address: 0xFE, name: "resistorStrappingLowWord", description: "Resistor strapping low word from t_strap3" };
  //public static resistorStrappingHighWord: Command = { address: 0xFF, name: "resistorStrappingHighWord", description: "Resistor strapping high word from t_strap3" };
}
