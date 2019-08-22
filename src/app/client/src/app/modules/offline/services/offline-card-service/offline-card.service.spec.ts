import { TestBed } from '@angular/core/testing';
import { OfflineCardService } from './offline-card.service';
import { Response } from './offline-card.service.spec.data';

describe('OfflineCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineCardService = TestBed.get(OfflineCardService);
    const response = service.checkYoutubeContent(Response.cardData);
    expect(response).toBe(true);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: OfflineCardService = TestBed.get(OfflineCardService);
    const response = service.checkYoutubeContent(Response.cardDataWithoutYoutubeContent);
    expect(response).toBe(false);
    expect(service).toBeTruthy();
  });
});
