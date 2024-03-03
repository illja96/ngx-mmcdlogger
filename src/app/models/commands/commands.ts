import { Command } from "./command";

export class ActionRequests {
  public clearFaults: Command = { address: 0xCA, description: "Clear faults" };

  public activateBoostControlSolenoid: Command = { address: 0xF1, description: "Activate boost control solenoid" };
  //public unused: ActionInfo = { address: 0xF2, description: "" };
  public activateEgrSolenoid: Command = { address: 0xF3, description: "Activate EGR solenoid" };
  public activateFuelPressureSolenoid: Command = { address: 0xF4, description: "Activate fuel pressure solenoid" };
  public activatePurgeSolenoid: Command = { address: 0xF5, description: "Activate purge solenoid" };
  public turnOnFuelPump: Command = { address: 0xF6, description: "Turn on fuel pump" };

  public disableInjector6: Command = { address: 0xF7, description: "Disable injector #6" };
  public disableInjector5: Command = { address: 0xF8, description: "Disable injector #5" };
  public disableInjector4: Command = { address: 0xF9, description: "Disable injector #4" };
  public disableInjector3: Command = { address: 0xFA, description: "Disable injector #3" };
  public disableInjector2: Command = { address: 0xFB, description: "Disable injector #2" };
  public disableInjector1: Command = { address: 0xFC, description: "Disable injector #1" };

  public serialLinkTest: Command = { address: 0xFD, description: "Serial link test (ECU Version)" };
  //public resistorStrappingLowWord: Command = { address: 0xFE, description: "Resistor strapping low word from t_strap3" };
  //public resistorStrappingHighWord: Command = { address: 0xFF, description: "Resistor strapping high word from t_strap3" };
}
