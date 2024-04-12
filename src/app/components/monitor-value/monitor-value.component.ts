import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Query } from '../../models/queries/query';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { QueryUnit } from '../../models/queries/query-unit';
import { QueryType } from '../../models/queries/query-type';

@Component({
  selector: 'app-monitor-value',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './monitor-value.component.html',
  styleUrl: './monitor-value.component.css'
})
export class MonitorValueComponent {
  @Input() public query!: Query;
  @Input() public description!: string;

  public get QueryType() {
    return QueryType;
  }

  public get QueryUnit() {
    return QueryUnit;
  }
}
