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
  public faults: boolean[] | undefined;
  public storedFaults: boolean[] | undefined;

  public get Commands() { return Commands; }

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly serialPortQueryLogService: SerialPortQueryLogService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
    this.serialPortQueryLogService.log.subscribe(log => this.log = log);
  }

  public onReadAllFaultsClicked(): void {
    const queries = [Queries.faultHi, Queries.faultLo, Queries.stFaultHi, Queries.stFaultLo];
    this.serialPortQueryLogService.startSingle(queries)
      .then(
        queryResponses => {
          this.faults = this.parseFaultsToBitArray(queryResponses[0]!, queryResponses[1]!);
          this.storedFaults = this.parseFaultsToBitArray(queryResponses[2]!, queryResponses[3]!);
        },
        error => this.globalAlertService.display({ type: "danger", title: "Command failed", text: error.message, dismissible: true, timeout: 10000 })
      );
  }

  public onActivateCommandClicked(command: Command): void {
    this.port?.request(command.address).then(
      result => {
        if (result === command.successResult) {
          this.globalAlertService.display({ type: "success", title: "Command executed", dismissible: true, timeout: 10000 });
          return;
        }

        if (result === command.failedResult) {
          this.globalAlertService.display({ type: "warning", title: "Command failed", text: "Try another engine state and check command compatibility", dismissible: true, timeout: 10000 });
          return;
        }

        this.globalAlertService.display({ type: "warning", title: "Command failed", text: "Command finished with unexpected result", dismissible: true, timeout: 10000 });
      },
      error => this.globalAlertService.display({ type: "danger", title: "Command failed", text: error.message, dismissible: true, timeout: 10000 }));
  }

  private parseFaultsToBitArray(hiBit: number, lowBit: number): boolean[] {
    const uint8Array = new Uint8Array([lowBit, hiBit]);
    const uint16Array = new Uint16Array(uint8Array.buffer);
    return [...Array(16)].map((v, i) => (uint16Array[0] >> i & 1) === 1);
  }
}
