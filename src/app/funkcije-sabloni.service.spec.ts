import { TestBed } from '@angular/core/testing';

import { FunkcijeSabloniService } from './funkcije-sabloni.service';

describe('FunkcijeSabloniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunkcijeSabloniService = TestBed.get(FunkcijeSabloniService);
    expect(service).toBeTruthy();
  });
});
