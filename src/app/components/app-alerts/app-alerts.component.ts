import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalAlertInfo } from '../../models/global-alert-info';
import { GlobalAlertService } from '../../services/global-alert.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, AlertModule],
  templateUrl: './app-alerts.component.html',
  styleUrl: './app-alerts.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppAlertsComponent {
  public alerts: GlobalAlertInfo[] = [];

  constructor(private readonly globalAlertService: GlobalAlertService) {
    this.globalAlertService.alert.subscribe(alert => this.alerts.push(alert));
  }
}
