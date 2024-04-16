import { Component } from '@angular/core';
import { QueryLog } from '../../models/queries/query-log';
import { TestFaultComponent } from '../test-fault/test-fault.component';
import { Command } from '../../models/commands/command';
import { Commands } from '../../models/commands/commands';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { GlobalAlertService } from '../../services/global-alert.service';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';
import { Queries } from '../../models/queries/queries';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TestFaultComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public port: SerialPortWrapper | undefined;
  public log: QueryLog | undefined;
  public faults: string | undefined;
  public storedFaults: string | undefined;

  public get Commands() { return Commands; }

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly serialPortQueryLogService: SerialPortQueryLogService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
    this.serialPortQueryLogService.log.subscribe(log => this.log = log);
  }

  public async onReadAllFaultsClicked(): Promise<void> {
    const queries = [Queries.faultHi, Queries.faultLo, Queries.stFaultHi, Queries.stFaultLo];

    const queryResponses = [];
    for (let i = 0; i < queries.length; i++) {
      queryResponses[i] = await this.port?.request(queries[i].address);
    }

    this.faults = this.parseFaultsToBitArray(queryResponses[0]!, queryResponses[1]!);
    this.storedFaults = this.parseFaultsToBitArray(queryResponses[2]!, queryResponses[3]!);

    this.globalAlertService.display({ type: "info", title: "test", text: "test", dismissible: true, timeout: 10000 });
  }

  public async onActivateCommandClicked(command: Command): Promise<void> {
    await this.port?.request(command.address).then(
      result => {
        if (command.expectedResults.findIndex(__ => __ === result) === -1)
          this.globalAlertService.display({ type: "warning", title: "Command failed", text: "Command didn't meet expected result", dismissible: true, timeout: 10000 });
        else
          this.globalAlertService.display({ type: "success", title: "Command executed", dismissible: true, timeout: 10000 });
      },
      error => this.globalAlertService.display({ type: "danger", title: "Command failed", text: error.message, dismissible: true, timeout: 10000 }));
  }

  private parseFaultsToBitArray(hiBit: number, lowBit: number): string {
    const uint8Array = new Uint8Array([hiBit, lowBit,]);
    const uint16Array = new Uint16Array(uint8Array.buffer);

    const uint16BitArray = uint16Array[0].toString(2);
    const valueRaw16BitArray = "0000000000000000" + uint16BitArray;
    const value16BitArray = valueRaw16BitArray.substring(valueRaw16BitArray.length - 8, valueRaw16BitArray.length);
    return value16BitArray;
  }
}
