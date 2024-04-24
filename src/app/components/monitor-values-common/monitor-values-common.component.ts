import { Component, Input } from '@angular/core';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { Queries } from '../../models/queries/queries';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { QueryLog } from '../../models/queries/query-log';

@Component({
  selector: 'app-monitor-values-common',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-values-common.component.html',
  styleUrl: './monitor-values-common.component.scss'
})
export class MonitorValuesCommonComponent {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;

  public get Queries() { return Queries; }
}
