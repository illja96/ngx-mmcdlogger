import { TestBed } from '@angular/core/testing';
import { MonitorValuesCommonComponent } from './monitor-values-common.component';
import { Queries } from '../../models/queries/queries';
import { Query } from '../../models/queries/query';
import { QueryGroup } from '../../models/queries/query-group';
import { MonitorValueComponent } from '../monitor-value/monitor-value.component';

describe("MonitorValuesCommonComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorValuesCommonComponent, MonitorValueComponent]
    }).compileComponents();
  });

  it("should have all common queries sorted by address", () => {
    const fixture = TestBed.createComponent(MonitorValuesCommonComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const queryDisplayNamesElements = compiled.querySelectorAll("app-monitor-value > div > div.w-30 > strong");
    const queryDisplayNames = Array.from(queryDisplayNamesElements)
      .map(_ => _.innerHTML.trim());

    const commonQueryDisplayNames = Object.entries(Queries).map(_ => _[1] as Query)
      .filter(_ => _.group === QueryGroup.common)
      .sort((a, b) => a.addresses[0] - b.addresses[0])
      .map(_ => _.displayName);

    expect(queryDisplayNames).toEqual(commonQueryDisplayNames);
  });
});
