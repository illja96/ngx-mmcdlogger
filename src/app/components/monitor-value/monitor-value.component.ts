import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Query } from '../../models/queries/query';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { QueryUnit } from '../../models/queries/query-unit';
import { QueryType } from '../../models/queries/query-type';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MonitorStateProviderService } from '../../services/monitor-state-provider.service';
import { filter, first } from 'rxjs';
import { QueryLog } from '../../models/queries/query-log';
import { NumberTo8BitArrayPipe } from '../../services/number-to-8bit-array.pipe';

@Component({
  selector: 'app-monitor-value',
  standalone: true,
  imports: [CommonModule, TooltipModule, ReactiveFormsModule, NumberTo8BitArrayPipe],
  templateUrl: './monitor-value.component.html',
  styleUrl: './monitor-value.component.css'
})
export class MonitorValueComponent implements OnInit, OnChanges {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;
  @Input() public query!: Query;
  @Input() public description!: string;

  public get QueryType() { return QueryType; }
  public get QueryUnit() { return QueryUnit; }

  public form = new FormGroup({
    query: new FormControl(false),
    chart: new FormControl(false),
  });

  constructor(private readonly monitorStateProvider: MonitorStateProviderService) {
    this.form.valueChanges
      .subscribe(_ => {
        _.query ? this.monitorStateProvider.addToQuery(this.query) : this.monitorStateProvider.removeFromQuery(this.query);
        _.chart ? this.monitorStateProvider.addToChart(this.query) : this.monitorStateProvider.removeFromChart(this.query);
      });
  }
  public ngOnInit(): void {
    this.monitorStateProvider.queryState
      .pipe(
        first(),
        filter(queryState => queryState.findIndex(query => query.propertyName === this.query.propertyName) !== -1))
      .subscribe(_ => this.form.controls.query.setValue(true, { emitEvent: false }));

    this.monitorStateProvider.chartState
      .pipe(
        first(),
        filter(chartState => chartState.findIndex(query => query.propertyName === this.query.propertyName) !== -1))
      .subscribe(_ => this.form.controls.chart.setValue(true, { emitEvent: false }));
  }

  public ngOnChanges(): void {
    if (this.query.type === QueryType.flags) this.form.controls.chart.disable({ emitEvent: false });
    if (this.port === undefined) this.form.disable({ emitEvent: false }); else this.form.enable({ emitEvent: false });
  }
}
