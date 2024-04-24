import { Component, Input } from '@angular/core';
import { Queries } from '../../models/queries/queries';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { QueryLog } from '../../models/queries/query-log';

@Component({
  selector: 'app-monitor-values-debug',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-values-debug.component.html',
  styleUrl: './monitor-values-debug.component.scss'
})
export class MonitorValuesDebugComponent {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;

  public get Queries() { return Queries; }
}
