import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-fault',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-fault.component.html',
  styleUrl: './test-fault.component.css'
})
export class TestFaultComponent {
  @Input() public bit!: number;
  @Input() public code!: string;
  @Input() public description!: string;

  @Input() public faults: boolean[] | undefined;
  @Input() public storedFaults: boolean[] | undefined;
}
