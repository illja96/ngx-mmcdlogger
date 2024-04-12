import { Component } from '@angular/core';
import { Queries } from '../../models/queries/queries';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';

@Component({
  selector: 'app-monitor-internal-values',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-internal-values.component.html',
  styleUrl: './monitor-internal-values.component.css'
})
export class MonitorInternalValuesComponent {
  public get Queries() {
    return Queries;
  }
}
