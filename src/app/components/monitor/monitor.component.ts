import { Component } from '@angular/core';
import { MonitorValuesCommonComponent } from '../monitor-values-common/monitor-values-common.component';
import { MonitorChartComponent } from '../monitor-chart/monitor-chart.component';
import { MonitorFlagsComponent } from '../monitor-flags/monitor-flags.component';
import { MonitorValuesAdvancedComponent } from '../monitor-values-advanced/monitor-values-advanced.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { SerialPortProviderService } from '../../services/serial-port-provider.service';
import { QueryLog } from '../../models/queries/query-log';
import { GlobalAlertService } from '../../services/global-alert.service';
import { SerialPortCommunicationService } from '../../services/serial-port-communication-service.service';
import { QueriesProviderService } from '../../services/queries-provider-service.service';
import { firstValueFrom } from 'rxjs';
import { MonitorValuesDebugComponent } from '../monitor-values-debug/monitor-values-debug.component';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [MonitorChartComponent, MonitorValuesCommonComponent, MonitorValuesAdvancedComponent, MonitorValuesDebugComponent, MonitorFlagsComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {
  public port: SerialPortWrapper | undefined = undefined;
  public log: QueryLog | undefined = undefined;

  private isWorking: boolean = false;

  constructor(
    private readonly serialPortProviderService: SerialPortProviderService,
    private readonly queriesProviderService: QueriesProviderService,
    private readonly serialPortCommunicationService: SerialPortCommunicationService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProviderService.port.subscribe(port => this.port = port);
  }

  public async onStartClicked(): Promise<void> {
    const queries = await firstValueFrom(this.queriesProviderService.activeQueries);
    this.serialPortCommunicationService.send(queries!)
      .then(
        log => {
          this.log = log;
          if (this.isWorking) this.onStartClicked();
        },
        error => {
          this.isWorking = false;
          this.globalAlertService.display({ type: "danger", title: "Query failed", text: error.message, dismissible: true, timeout: 10000 })
        });
  }

  public onStopClicked(): void {
    this.isWorking = true;
  }
}
