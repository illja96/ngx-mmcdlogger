import { Component, Input } from '@angular/core';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { Queries } from '../../models/queries/queries';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { QueryLog } from '../../models/queries/query-log';

@Component({
  selector: 'app-monitor-flags',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-flags.component.html',
  styleUrl: './monitor-flags.component.scss'
})
export class MonitorFlagsComponent {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;

  public get Queries() { return Queries; }
}
