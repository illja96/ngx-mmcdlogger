import { Component } from '@angular/core';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { Queries } from '../../models/queries/queries';

@Component({
  selector: 'app-monitor-values',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-values.component.html',
  styleUrl: './monitor-values.component.css'
})
export class MonitorValuesComponent {
  public get Queries() {
    return Queries;
  }
}
