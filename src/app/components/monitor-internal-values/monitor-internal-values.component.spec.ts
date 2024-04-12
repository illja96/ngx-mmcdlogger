import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorInternalValuesComponent } from './monitor-internal-values.component';

describe('MonitorInternalValuesComponent', () => {
  let component: MonitorInternalValuesComponent;
  let fixture: ComponentFixture<MonitorInternalValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorInternalValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorInternalValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
