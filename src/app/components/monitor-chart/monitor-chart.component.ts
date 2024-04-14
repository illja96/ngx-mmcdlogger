import { Component } from '@angular/core';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';

@Component({
  selector: 'app-monitor-chart',
  standalone: true,
  imports: [],
  templateUrl: './monitor-chart.component.html',
  styleUrl: './monitor-chart.component.css'
})
export class MonitorChartComponent {
  constructor(private readonly serialPortQueryLogService: SerialPortQueryLogService) { }

  public onStartClicked(): void {
    this.serialPortQueryLogService.start();
  }

  public onStopClicked(): void {
    this.serialPortQueryLogService.stop();
  }
}
