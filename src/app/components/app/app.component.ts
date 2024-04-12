import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SerialPortProviderService } from '../../services/serial-port-provider/serial-port-provider.service';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public port: SerialPortWrapper | undefined;
  public portSelectorOpened: boolean = false;

  constructor(private serialPortProviderService: SerialPortProviderService) {
    this.serialPortProviderService.port
      .subscribe(port => this.port = port);
  }

  public onSelectSerialPortClicked(): void {
    this.portSelectorOpened = true;
    this.serialPortProviderService.select()
      .finally(() => this.portSelectorOpened = false);
  }
}
