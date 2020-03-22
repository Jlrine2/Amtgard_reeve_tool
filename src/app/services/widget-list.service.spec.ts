import { TestBed } from '@angular/core/testing';

import { WidgetListService } from './widget-list.service';

describe('WidgetListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetListService = TestBed.get(WidgetListService);
    expect(service).toBeTruthy();
  });
});
