import { Component } from '@angular/core';
import { MonitorValuesComponent } from '../monitor-values/monitor-values.component';
import { MonitorChartComponent } from '../monitor-chart/monitor-chart.component';
import { MonitorFlagsComponent } from '../monitor-flags/monitor-flags.component';
import { MonitorInternalValuesComponent } from '../monitor-internal-values/monitor-internal-values.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [MonitorValuesComponent, MonitorInternalValuesComponent, MonitorFlagsComponent, MonitorChartComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {
  public port: SerialPortWrapper | undefined = undefined;

  constructor(private readonly serialPortProviderService: SerialPortProviderService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
  }
}
