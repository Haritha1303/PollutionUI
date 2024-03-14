import { TestBed } from '@angular/core/testing';

import { BookMarkServiceService } from './book-mark-service.service';

describe('BookMarkServiceService', () => {
  let service: BookMarkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMarkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
