import { Component } from '@angular/core';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { Queries } from '../../models/queries/queries';

@Component({
  selector: 'app-monitor-flags',
  standalone: true,
  imports: [MonitorValueComponent],
  templateUrl: './monitor-flags.component.html',
  styleUrl: './monitor-flags.component.css'
})
export class MonitorFlagsComponent {
  public get Queries() {
    return Queries;
  }
}
