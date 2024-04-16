import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';
import { CartesianScaleTypeRegistry, Chart, ChartConfiguration, ChartData, ChartDataset, ScaleChartOptions } from 'chart.js/auto';
import { QueryLog } from '../../models/queries/query-log';
import { filter } from 'rxjs';
import { Queries } from '../../models/queries/queries';
import { Query } from '../../models/queries/query';
import { QueryType } from '../../models/queries/query-type';

@Component({
  selector: 'app-monitor-chart',
  standalone: true,
  imports: [],
  templateUrl: './monitor-chart.component.html',
  styleUrl: './monitor-chart.component.css'
})
export class MonitorChartComponent implements AfterViewInit {
  @ViewChild("chartCanvas") chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart!: Chart;

  constructor(private readonly serialPortQueryLogService: SerialPortQueryLogService) { }

  public ngAfterViewInit(): void {
    this.initializeChartCanvas();

    this.serialPortQueryLogService.log
      .pipe(filter(log => log !== undefined))
      .subscribe(log => this.updateChartCanvas(log!));
  }

  private initializeChartCanvas(): void {
    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const months = (config: any) => {
      var cfg = config || {};
      var count = cfg.count || 12;
      var section = cfg.section;
      var values = [];
      var i, value;

      for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
      }

      return values;
    }

    const valueOrDefault = (value: any | undefined, defaultValue: any) => {
      return typeof value === 'undefined' ? defaultValue : value;
    }

    const numbers = (config: any) => {
      var cfg = config || {};
      var min = valueOrDefault(cfg.min, 0);
      var max = valueOrDefault(cfg.max, 100);
      var from = valueOrDefault(cfg.from, []);
      var count = valueOrDefault(cfg.count, 8);
      var decimals = valueOrDefault(cfg.decimals, 8);
      var continuity = valueOrDefault(cfg.continuity, 1);
      var dfactor = Math.pow(10, decimals) || 0;
      var data = [];
      var i, value;

      for (i = 0; i < count; ++i) {
        value = (from[i] || 0) + rand(min, max);
        if (rand() <= continuity) {
          data.push(Math.round(dfactor * value) / dfactor);
        } else {
          data.push(null);
        }
      }

      return data;
    }

    var _seed = Date.now();
    const rand = (min: number = 0, max: number = 0) => {
      min = valueOrDefault(min, 0);
      max = valueOrDefault(max, 0);
      _seed = (_seed * 9301 + 49297) % 233280;
      return min + (_seed / 233280) * (max - min);
    }

    const labels = months({ count: 7 });

    const datasets: ChartDataset<"line", (number | null)[]>[] = [];
    const queries = (Object.entries(Queries) as [string, Query][])
      .filter(_ => _[1].type === QueryType.number)
      .sort((a, b) => a[1].displayName.localeCompare(b[1].displayName));
    for (const query of queries) {
      const dataset: ChartDataset<"line", (number | null)[]> = {
        label: query[1].displayName,
        data: numbers(NUMBER_CFG),
        hidden: true
      };
      datasets.push(dataset);
    }

    const data: ChartData<"line", (number | null)[], string> = {
      labels: labels,
      datasets: datasets,
    };

    this.chart = new Chart(
      this.chartCanvas.nativeElement,
      {
        type: "line",
        data: data,
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
              maxHeight: 300,
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
    for (let i = 0; i < (this.chart.data.labels ?? []).length; i++) {
      this.chart.data.labels?.pop();
    }

    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    for (const query of queries) {
      const dataset = this.chart.data.datasets.find(dataset => dataset.label === query.displayName);
    }
  }
}
