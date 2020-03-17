import { TestBed } from '@angular/core/testing';

import { GetFavoritesServiceService } from './get-favorites-service.service';

describe('GetFavoritesServiceService', () => {
  let service: GetFavoritesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFavoritesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
