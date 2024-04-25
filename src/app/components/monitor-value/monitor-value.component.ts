import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Query } from '../../models/queries/query';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { QueryUnit } from '../../models/queries/query-unit';
import { QueryType } from '../../models/queries/query-type';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { filter, first } from 'rxjs';
import { QueryLog } from '../../models/queries/query-log';
import { Uint8BitArrayPipe } from '../../pipes/uint8-bit-array.pipe';
import { QueriesProviderService } from '../../services/queries-provider-service.service';
import { Uint8HexPipe } from '../../pipes/uint8-hex.pipe';

@Component({
  selector: 'app-monitor-value',
  standalone: true,
  imports: [CommonModule, TooltipModule, ReactiveFormsModule, Uint8BitArrayPipe, Uint8HexPipe],
  templateUrl: './monitor-value.component.html',
  styleUrl: './monitor-value.component.scss'
})
export class MonitorValueComponent implements OnChanges, OnInit {
  @Input() public port!: SerialPortWrapper | undefined;
  @Input() public log!: QueryLog | undefined;
  @Input() public query!: Query;
  @Input() public description!: string;

  public get QueryType() { return QueryType; }
  public get QueryUnit() { return QueryUnit; }

  public form = new FormGroup({
    query: new FormControl(false)
  });

  constructor(private readonly queriesProviderService: QueriesProviderService) {
    this.form.valueChanges
      .subscribe(_ => _.query ? this.queriesProviderService.addToActiveQueries(this.query) : this.queriesProviderService.addToActiveQueries(this.query));
  }

  public ngOnInit(): void {
    this.queriesProviderService.activeQueries
      .pipe(
        filter(activeQueries => activeQueries !== undefined),
        first(),
        filter(activeQueries => activeQueries!.findIndex(activeQuery => activeQuery.propertyName === this.query.propertyName) !== -1))
      .subscribe(_ => this.form.controls.query.setValue(true, { emitEvent: false }));
  }

  public ngOnChanges(): void {
    if (this.port === undefined) this.form.disable({ emitEvent: false });
    else this.form.enable({ emitEvent: false });
  }
}
