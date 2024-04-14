import { Component, Input } from '@angular/core';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { Queries } from '../../models/queries/queries';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { QueryLog } from '../../models/queries/query-log';

@Component({
  selector: 'app-monitor-values',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-values.component.html',
  styleUrl: './monitor-values.component.css'
})
export class MonitorValuesComponent {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;

  public get Queries() { return Queries; }
}
