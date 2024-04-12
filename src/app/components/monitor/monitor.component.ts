import { Component } from '@angular/core';
import { MonitorValuesComponent } from '../monitor-values/monitor-values.component';
import { MonitorChartComponent } from '../monitor-chart/monitor-chart.component';
import { MonitorFlagsComponent } from '../monitor-flags/monitor-flags.component';
import { MonitorInternalValuesComponent } from '../monitor-internal-values/monitor-internal-values.component';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [MonitorValuesComponent, MonitorInternalValuesComponent, MonitorFlagsComponent, MonitorChartComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent { }
