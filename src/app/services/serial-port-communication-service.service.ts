import { Injectable } from '@angular/core';
import { SerialPortWrapper } from '../models/serial-port-wrapper';
import { SerialPortProviderService } from './serial-port-provider.service';
import { Query } from '../models/queries/query';
import { QueryLog } from '../models/queries/query-log';
import { QueryLogsProviderService } from './query-logs-provider-service.service';

@Injectable({
  providedIn: 'root'
})
export class SerialPortCommunicationService {
  private port: SerialPortWrapper | undefined = undefined;
  private portBusy: boolean = false;

  constructor(
    private readonly serialPortProvider: SerialPortProviderService,
    private readonly queryLogsProviderService: QueryLogsProviderService) {
    this.serialPortProvider.port.subscribe(port => this.port = port);
  }

  public async send(queries: Query[]): Promise<QueryLog> {
    try {
      if (this.portBusy === true) throw new Error("Serial port busy");
      this.portBusy = true;

      const log: QueryLog = {
        date: Date.now()
      };

      for (const query of queries) {
        const queryRawValue = await this.port!.request(query.address);
        const queryValue = query.formula(queryRawValue);
        log[query.propertyName] = queryValue;
      }

      this.queryLogsProviderService.next(log);
      return log;
    }
    finally {
      this.portBusy = false;
    }
  }
}
