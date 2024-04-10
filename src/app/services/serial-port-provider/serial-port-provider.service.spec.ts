import { TestBed } from '@angular/core/testing';

import { SerialPortProviderService } from './serial-port-provider.service';

describe('SerialPortProviderService', () => {
  let service: SerialPortProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerialPortProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
