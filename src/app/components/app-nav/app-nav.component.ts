import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.css'
})
export class AppNavComponent {
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
