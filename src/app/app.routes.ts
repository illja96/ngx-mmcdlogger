import { Routes } from '@angular/router';
import { MonitorComponent } from './components/monitor/monitor.component';
import { TestComponent } from './components/test/test.component';
import { ReviewComponent } from './components/review/review.component';
import { AppHomeComponent } from './components/app-home/app-home.component';

export const routes: Routes = [
  { path: "", pathMatch: "full", component: AppHomeComponent },
  { path: "monitor", pathMatch: "full", component: MonitorComponent },
  { path: "test", pathMatch: "full", component: TestComponent },
  { path: "review", pathMatch: "full", component: ReviewComponent }
];
