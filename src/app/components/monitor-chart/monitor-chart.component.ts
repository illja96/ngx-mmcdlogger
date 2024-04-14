import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SerialPortQueryLogService } from '../../services/serial-port-query-log.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-monitor-chart',
  standalone: true,
  imports: [],
  templateUrl: './monitor-chart.component.html',
  styleUrl: './monitor-chart.component.css'
})
export class MonitorChartComponent implements AfterViewInit {
  @ViewChild("chartCanvas") chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  constructor(private readonly serialPortQueryLogService: SerialPortQueryLogService) { }

  public ngAfterViewInit(): void {
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
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: numbers(NUMBER_CFG)
        },
        {
          label: 'Dataset 2',
          data: numbers(NUMBER_CFG)
        }
      ]
    };


    this.chart = new Chart(
      this.chartCanvas.nativeElement,
      {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            }
          }
        }
      });
  }

  public onStartClicked(): void {
    this.serialPortQueryLogService.start();
  }

  public onStopClicked(): void {
    this.serialPortQueryLogService.stop();
  }
}
