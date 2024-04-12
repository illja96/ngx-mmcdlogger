import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorFlagsComponent } from './monitor-flags.component';

describe('MonitorFlagsComponent', () => {
  let component: MonitorFlagsComponent;
  let fixture: ComponentFixture<MonitorFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorFlagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
