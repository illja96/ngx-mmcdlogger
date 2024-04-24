import { Component, Input } from '@angular/core';
import { Queries } from '../../models/queries/queries';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { QueryLog } from '../../models/queries/query-log';

@Component({
  selector: 'app-monitor-values-advanced',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-values-advanced.component.html',
  styleUrl: './monitor-values-advanced.component.scss'
})
export class MonitorValuesAdvancedComponent {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;

  public get Queries() { return Queries; }
}
