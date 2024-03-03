import { Routes } from '@angular/router';
import { MonitorComponent } from './components/monitor/monitor.component';
import { TestComponent } from './components/test/test.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
  { path: 'monitor', component: MonitorComponent },
  { path: 'test', component: TestComponent },
  { path: 'review', component: ReviewComponent }
];
