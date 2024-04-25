import { Component } from '@angular/core';
import { TestFaultComponent } from '../test-fault/test-fault.component';
import { Command } from '../../models/commands/command';
import { Commands } from '../../models/commands/commands';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { GlobalAlertService } from '../../services/global-alert.service';
import { Queries } from '../../models/queries/queries';
import { SerialPortCommunicationService } from '../../services/serial-port-communication-service.service';
import { QueryValueHelper } from '../../models/queries/query-value-helper';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TestFaultComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  public port: SerialPortWrapper | undefined;
  public faults: boolean[] | undefined;
  public storedFaults: boolean[] | undefined;

  public get Commands() { return Commands; }

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly serialPortCommunicationService: SerialPortCommunicationService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
  }

  public async onReadAllFaultsClicked(): Promise<void> {
    const queries = [Queries.faults, Queries.stFaults];

    this.serialPortCommunicationService.send(queries)
      .then(
        log => {
          this.faults = QueryValueHelper.uintToBitArray(log[Queries.faults.propertyName], 16);
          this.storedFaults = QueryValueHelper.uintToBitArray(log[Queries.stFaults.propertyName], 16);;
        },
        error => this.globalAlertService.display({ type: "danger", title: "Command failed", text: error.message, dismissible: true, timeout: 10000 }));
  }

  public onActivateCommandClicked(command: Command): void {
    this.port!.request(command.address).then(
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
}
