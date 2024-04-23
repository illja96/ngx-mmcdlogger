import { Routes } from '@angular/router';
import { MonitorComponent } from './components/monitor/monitor.component';
import { TestComponent } from './components/test/test.component';
import { ReviewComponent } from './components/review/review.component';
import { AppHomeComponent } from './components/app-home/app-home.component';

export const routes: Routes = [
  { path: "", component: AppHomeComponent },
  { path: "monitor", component: MonitorComponent },
  { path: "test", component: TestComponent },
  { path: "review", component: ReviewComponent }
];
