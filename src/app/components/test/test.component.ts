import { Component } from '@angular/core';
import { Log } from '../../models/log';
import { TestFaultComponent } from '../test-fault/test-fault.component';
import { Command } from '../../models/commands/command';
import { Commands } from '../../models/commands/commands';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { GlobalAlertService } from '../../services/global-alert.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TestFaultComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public log: Log | undefined;
  public port: SerialPortWrapper | undefined;

  public get Commands() { return Commands; }

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port
      .subscribe(port => this.port = port);
  }

  public onReadAllFaultsClicked(): void {
    this.globalAlertService.display({ type: "info", title: "test", text: "test", dismissible: true });

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
