import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { Query } from '../../models/queries/query';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { QueryUnit } from '../../models/queries/query-unit';
import { QueryType } from '../../models/queries/query-type';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitor-value',
  standalone: true,
  imports: [CommonModule, TooltipModule, ReactiveFormsModule],
  templateUrl: './monitor-value.component.html',
  styleUrl: './monitor-value.component.css'
})
export class MonitorValueComponent implements OnChanges {
  @Input() public port!: SerialPortWrapper | undefined;

  @Input() public query!: Query;
  @Input() public description!: string;

  public get QueryType() { return QueryType; }
  public get QueryUnit() { return QueryUnit; }

  public form = new FormGroup({
    query: new FormControl(false),
    chart: new FormControl(false),
  });

  public ngOnChanges(): void {
    if (this.query.type === QueryType.flags) this.form.controls.chart.disable();
    if (this.port === undefined) this.form.disable(); else this.form.enable();
  }
}
