import { ActionInfo } from "../action-info/action-info";

export class ActionRequests {
  public clearFaults: ActionInfo = { name: "Clear faults", address: 0xCA };

  public activateBoostControlSolenoid: ActionInfo = { name: "Activate boost control solenoid", address: 0xF1 };
  //public unused: ActionInfo = { name: "", address: 0xF2 };
  public activateEgrSolenoid: ActionInfo = { name: "Activate EGR solenoid", address: 0xF3 };
  public activateFuelPressureSolenoid: ActionInfo = { name: "Activate fuel pressure solenoid", address: 0xF4 };
  public activatePurgeSolenoid: ActionInfo = { name: "Activate purge solenoid", address: 0xF5 };
  public turnOnFuelPump: ActionInfo = { name: "Turn on fuel pump", address: 0xF6 };

  public disableInjector6: ActionInfo = { name: "Disable injector #6", address: 0xF7 };
  public disableInjector5: ActionInfo = { name: "Disable injector #5", address: 0xF8 };
  public disableInjector4: ActionInfo = { name: "Disable injector #4", address: 0xF9 };
  public disableInjector3: ActionInfo = { name: "Disable injector #3", address: 0xFA };
  public disableInjector2: ActionInfo = { name: "Disable injector #2", address: 0xFB };
  public disableInjector1: ActionInfo = { name: "Disable injector #1", address: 0xFC };

  public serialLinkTest: ActionInfo = { name: "Serial link test (ECU Version)", address: 0xFD };
  //public resistorStrappingLowWord: ActionInfo = { name: "Resistor strapping low word from t_strap3", address: 0xFE };
  //public resistorStrappingHighWord: ActionInfo = { name: "Resistor strapping high word from t_strap3", address: 0xFF };
}
