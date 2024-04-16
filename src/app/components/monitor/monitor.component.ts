import { Component } from '@angular/core';
import { MonitorValuesComponent } from '../monitor-values/monitor-values.component';
import { MonitorChartComponent } from '../monitor-chart/monitor-chart.component';
import { MonitorFlagsComponent } from '../monitor-flags/monitor-flags.component';
import { MonitorInternalValuesComponent } from '../monitor-internal-values/monitor-internal-values.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';
import { QueryLog } from '../../models/queries/query-log';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [MonitorChartComponent, MonitorValuesComponent, MonitorInternalValuesComponent, MonitorFlagsComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {
  public port: SerialPortWrapper | undefined = undefined;
  public log: QueryLog | undefined = undefined;

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly serialPortQueryLogService: SerialPortQueryLogService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
    this.serialPortQueryLogService.log.subscribe(log => this.log = log);
  }

  public onStartClicked(): void {
    this.serialPortQueryLogService.startContinuous();
  }

  public onStopClicked(): void {
    this.serialPortQueryLogService.stopContinuous();
  }
}
