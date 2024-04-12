import { Component } from '@angular/core';
import { Log } from '../../models/log';
import { TestFaultComponent } from '../test-fault/test-fault.component';
import { Queries } from '../../models/queries/queries';
import { Command } from '../../models/commands/command';
import { Commands } from '../../models/commands/commands';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';

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

  constructor(private readonly serialPortProviderService: SerialPortProviderService) {
    this.serialPortProviderService.port
      .subscribe(port => this.port = port);
  }

  public onReadAllFaultsClicked(): void {
    if (this.port === undefined) return;

    this.port.request(Queries.battRaw.address)
      .then(_ => console.log(_))
      .catch(_ => console.log(_));
  }

  public onActivateCommandClicked(command: Command): void {
    if (this.port === undefined) return;

    this.port.request(command.address)
      .then(_ => console.log(_))
      .catch(_ => console.log(_));
  }
}
