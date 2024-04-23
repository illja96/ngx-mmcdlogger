import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartDataset, ChartTypeRegistry } from 'chart.js/auto';
import { QueryLog } from '../../models/queries/query-log';
import { filter, firstValueFrom } from 'rxjs';
import { Queries } from '../../models/queries/queries';
import { Query } from '../../models/queries/query';
import { QueryLogsProviderService } from '../../services/query-logs-provider-service.service';
import { QueriesProviderService } from '../../services/queries-provider-service.service';

@Component({
  selector: 'app-monitor-chart',
  standalone: true,
  imports: [],
  templateUrl: './monitor-chart.component.html',
  styleUrl: './monitor-chart.component.scss'
})
export class MonitorChartComponent implements AfterViewInit {
  @ViewChild("chartCanvas") chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart<keyof ChartTypeRegistry, (number | null)[], string>;

  private queriesByDispyaName: { [displayName: string]: Query } = {};

  constructor(
    private readonly queriesProviderService: QueriesProviderService,
    private readonly queryLogsProviderService: QueryLogsProviderService) {
    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    for (const query of queries) {
      this.queriesByDispyaName[query.displayName] = query;
    }
  }

  public async ngAfterViewInit(): Promise<void> {
    await this.initializeChartCanvas();

    this.queryLogsProviderService.log
      .pipe(filter(log => log !== undefined))
      .subscribe(log => this.updateChartCanvas(log!));
  }

  private async initializeChartCanvas(): Promise<void> {
    const labels: string[] = [];

    const datasets: ChartDataset<"line", (number | null)[]>[] = [];
    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    const chartQueries = await firstValueFrom(this.queriesProviderService.chartQueries);        
    for (const query of queries) {
      const dataset: ChartDataset<"line", (number | null)[]> = {
        label: query.displayName,
        data: [],
        hidden: chartQueries!.findIndex(_ => _.propertyName === query.propertyName) === -1
      };

      datasets.push(dataset);
    }

    this.chart = new Chart<keyof ChartTypeRegistry, (number | null)[], string>(
      this.chartCanvas.nativeElement,
      {
        type: "line",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          responsive: true,
          aspectRatio: 1,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: 'index'
          },
          plugins: {
            legend: {
              position: "bottom",
              maxHeight: 350,
              onClick: (ce, li, le) => {
                // TODO: add dataset hide state save
                Chart.defaults.plugins.legend.onClick.call(le, ce, li, le);
              }
            }
          }
        }
      });
  }

  private updateChartCanvas(log: QueryLog): void {
    const newLabel = new Date(log.date).toISOString();
    this.chart.data.labels!.push(newLabel);

    for (const dataset of this.chart.data.datasets) {
      const query = this.queriesByDispyaName[dataset.label!];
      const newQueryValue: number | undefined = log[query.propertyName];
      const newDatasetValue = newQueryValue === undefined ? null : newQueryValue;
      dataset.data.push(newDatasetValue);
    }

    this.chart.update();
  }
}
