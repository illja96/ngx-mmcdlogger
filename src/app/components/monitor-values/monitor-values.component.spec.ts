import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorValuesComponent } from './monitor-values.component';

describe('MonitorValuesComponent', () => {
  let component: MonitorValuesComponent;
  let fixture: ComponentFixture<MonitorValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
