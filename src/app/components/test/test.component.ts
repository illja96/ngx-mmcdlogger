import { Component } from '@angular/core';
import { Log } from '../../models/log';
import { TestFaultComponent } from '../test-fault/test-fault.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TestFaultComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public log: Log | undefined;
}
