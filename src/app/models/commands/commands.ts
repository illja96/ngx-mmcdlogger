import { Command } from "./command";

export class Commands {
  public static clearFaults: Command = { address: 0xCA, name: "clearFaults", expectedResults: [0x00, 0xFF]  };

  public static activateBoostControlSolenoid: Command = { address: 0xF1, name: "activateBoostControlSolenoid", expectedResults: [0xFF]  };
  public static mivecMotor: Command = { address: 0xF2, name: "mivecMotor", expectedResults: [0xFF]  };
  public static activateEgrSolenoid: Command = { address: 0xF3, name: "activateEgrSolenoid", expectedResults: [0xFF]  };
  public static activateFuelPressureSolenoid: Command = { address: 0xF4, name: "activateFuelPressureSolenoid", expectedResults: [0xFF]  };
  public static activatePurgeSolenoid: Command = { address: 0xF5, name: "activatePurgeSolenoid", expectedResults: [0xFF]  };
  public static turnOnFuelPump: Command = { address: 0xF6, name: "turnOnFuelPump", expectedResults: [0xFF]  };
  public static disableInjector6: Command = { address: 0xF7, name: "disableInjector6", expectedResults: [0xFF] };
  public static disableInjector5: Command = { address: 0xF8, name: "disableInjector5", expectedResults: [0xFF] };
  public static disableInjector4: Command = { address: 0xF9, name: "disableInjector4", expectedResults: [0xFF] };
  public static disableInjector3: Command = { address: 0xFA, name: "disableInjector3", expectedResults: [0xFF]  };
  public static disableInjector2: Command = { address: 0xFB, name: "disableInjector2", expectedResults: [0xFF]  };
  public static disableInjector1: Command = { address: 0xFC, name: "disableInjector1", expectedResults: [0xFF]  };

  public static serialLinkTest: Command = { address: 0xFD, name: "serialLinkTest", expectedResults: [0xB5, 0xB7] };

  public static resistorStrappingLowWord: Command = { address: 0xFE, name: "resistorStrappingLowWord", expectedResults: []  };
  public static resistorStrappingHighWord: Command = { address: 0xFF, name: "resistorStrappingHighWord", expectedResults: []  };
}
