import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SerialPortService } from '../../services/serial-port/serial-port.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public port: SerialPort | undefined;
  public portAwaiting: boolean = false;

  constructor(private serialPortService: SerialPortService) { }

  public onSelectSerialPortClicked(): void {
    this.portAwaiting = true;
    this.serialPortService.select()
      .then(port => this.port = port)
      .finally(() => this.portAwaiting = false);
  }
}
