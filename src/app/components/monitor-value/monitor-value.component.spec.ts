import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorValueComponent } from './monitor-value.component';

describe('MonitorValueComponent', () => {
  let component: MonitorValueComponent;
  let fixture: ComponentFixture<MonitorValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
