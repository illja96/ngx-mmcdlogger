import { Component } from '@angular/core';
import { AppNavComponent } from '../app-nav/app-nav.component';
import { RouterOutlet } from '@angular/router';
import { AppAlertsComponent } from '../app-alerts/app-alerts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppNavComponent, RouterOutlet, AppAlertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
