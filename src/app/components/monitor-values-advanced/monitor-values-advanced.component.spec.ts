import { TestBed } from '@angular/core/testing';
import { Queries } from '../../models/queries/queries';
import { Query } from '../../models/queries/query';
import { QueryGroup } from '../../models/queries/query-group';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';
import { MonitorValuesAdvancedComponent } from './monitor-values-advanced.component';

describe("MonitorValuesAdvancedComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorValuesAdvancedComponent, MonitorValueComponent]
    }).compileComponents();
  });

  it("should have all advanced queries sorted by address", () => {
    const fixture = TestBed.createComponent(MonitorValuesAdvancedComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const queryDisplayNamesElements = compiled.querySelectorAll("app-monitor-value > div > div.w-30 > strong");
    const queryDisplayNames = Array.from(queryDisplayNamesElements)
      .map(_ => _.innerHTML.trim());

    const commonQueryDisplayNames = Object.entries(Queries).map(_ => _[1] as Query)
      .filter(_ => _.group === QueryGroup.advanced)
      .sort((a, b) => a.addresses[0] - b.addresses[0])
      .map(_ => _.displayName);

    expect(queryDisplayNames).toEqual(commonQueryDisplayNames);
  });
});
