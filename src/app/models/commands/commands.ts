import { Command } from "./command";

export class ActionRequests {
  public static clearFaults: Command = { address: 0xCA, description: "Clear faults" };

  public static activateBoostControlSolenoid: Command = { address: 0xF1, description: "Activate boost control solenoid" };
  //public static unused: ActionInfo = { address: 0xF2, description: "" };
  public static activateEgrSolenoid: Command = { address: 0xF3, description: "Activate EGR solenoid" };
  public static activateFuelPressureSolenoid: Command = { address: 0xF4, description: "Activate fuel pressure solenoid" };
  public static activatePurgeSolenoid: Command = { address: 0xF5, description: "Activate purge solenoid" };
  public static turnOnFuelPump: Command = { address: 0xF6, description: "Turn on fuel pump" };
  public static disableInjector6: Command = { address: 0xF7, description: "Disable injector #6" };
  public static disableInjector5: Command = { address: 0xF8, description: "Disable injector #5" };
  public static disableInjector4: Command = { address: 0xF9, description: "Disable injector #4" };
  public static disableInjector3: Command = { address: 0xFA, description: "Disable injector #3" };
  public static disableInjector2: Command = { address: 0xFB, description: "Disable injector #2" };
  public static disableInjector1: Command = { address: 0xFC, description: "Disable injector #1" };
  public static serialLinkTest: Command = { address: 0xFD, description: "Serial link test" };
  public static resistorStrappingLowWord: Command = { address: 0xFE, description: "Resistor strapping low word from t_strap3" };
  public static resistorStrappingHighWord: Command = { address: 0xFF, description: "Resistor strapping high word from t_strap3" };
}
