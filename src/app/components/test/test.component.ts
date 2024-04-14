import { Component } from '@angular/core';
import { QueryLog } from '../../models/queries/query-log';
import { TestFaultComponent } from '../test-fault/test-fault.component';
import { Command } from '../../models/commands/command';
import { Commands } from '../../models/commands/commands';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { GlobalAlertService } from '../../services/global-alert.service';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';

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

  public get Commands() { return Commands; }

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly serialPortQueryLogService: SerialPortQueryLogService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
    this.serialPortQueryLogService.log.subscribe(log => this.log = log);
  }

  public onReadAllFaultsClicked(): void {
    this.globalAlertService.display({ type: "info", title: "test", text: "test", dismissible: true, timeout: 10000 });

    // TODO: Implement
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
}
