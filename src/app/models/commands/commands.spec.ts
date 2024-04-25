import { Uint8HexPipe } from '../../pipes/uint8-hex.pipe';
import { Command } from './command';
import { Commands } from './commands';

describe("Commands", () => {
  const uint8HexPipe = new Uint8HexPipe();
  
  it("should contains only unique addresses", () => {
    const commandsByAddress: { [address: string]: Command[] } = {};
    const commands = Object.entries(Commands).map(_ => _[1] as Command);
    for (const command of commands) {
      const addressInHex = uint8HexPipe.transform(command.address);
      if (commandsByAddress[addressInHex] === undefined) commandsByAddress[addressInHex] = [];
      commandsByAddress[addressInHex].push(command);
    }

    for (const [address, commands] of Object.entries(commandsByAddress)) {
      expect(commands.length).withContext(`Address ${address} are used by multiple commands`).toBe(1);
    }
  });

  it("should contains only unique names", () => {
    const commandsByName: { [address: string]: Command[] } = {};
    const commands = Object.entries(Commands).map(_ => _[1] as Command);
    for (const command of commands) {
      if (commandsByName[command.name] === undefined) commandsByName[command.name] = [];
      commandsByName[command.name].push(command);
    }

    for (const [name, commands] of Object.entries(commandsByName)) {
      expect(commands.length).withContext(`Name ${name} are used by multiple commands`).toBe(1);
    }
  });
});
