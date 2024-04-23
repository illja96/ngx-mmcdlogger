import { Component } from '@angular/core';
import { MonitorValuesComponent } from '../monitor-values/monitor-values.component';
import { MonitorChartComponent } from '../monitor-chart/monitor-chart.component';
import { MonitorFlagsComponent } from '../monitor-flags/monitor-flags.component';
import { MonitorInternalValuesComponent } from '../monitor-internal-values/monitor-internal-values.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';
import { QueryLog } from '../../models/queries/query-log';
import { GlobalAlertService } from '../../services/global-alert.service';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [MonitorChartComponent, MonitorValuesComponent, MonitorInternalValuesComponent, MonitorFlagsComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {
  public port: SerialPortWrapper | undefined = undefined;
  public log: QueryLog | undefined = undefined;

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly serialPortQueryLogService: SerialPortQueryLogService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
    this.serialPortQueryLogService.log.subscribe(log => this.log = log);
  }

  public onStartClicked(): void {
    this.serialPortQueryLogService.startContinuous()
      .then(
        () => { },
        error => this.globalAlertService.display({ type: "danger", title: "Query failed", text: error.message, dismissible: true, timeout: 10000 }));
  }

  public onStopClicked(): void {
    this.serialPortQueryLogService.stopContinuous();
  }
}
