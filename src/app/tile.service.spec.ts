import { TestBed } from '@angular/core/testing';

import { TileService } from './tile.service';

describe('TileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TileService = TestBed.get(TileService);
    expect(service).toBeTruthy();
  });
});
