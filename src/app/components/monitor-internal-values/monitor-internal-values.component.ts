import { Component, Input } from '@angular/core';
import { Queries } from '../../models/queries/queries';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';

@Component({
  selector: 'app-monitor-internal-values',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-internal-values.component.html',
  styleUrl: './monitor-internal-values.component.css'
})
export class MonitorInternalValuesComponent {
  @Input() public port!: SerialPortWrapper | undefined;

  public get Queries() { return Queries; }
}
