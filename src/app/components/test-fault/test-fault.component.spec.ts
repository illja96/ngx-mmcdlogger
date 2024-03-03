import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFaultComponent } from './test-fault.component';

describe('TestFaultComponent', () => {
  let component: TestFaultComponent;
  let fixture: ComponentFixture<TestFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
