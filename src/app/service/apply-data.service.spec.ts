import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplyDataService } from './apply-data.service';

describe('ApplyDataService', () => {
  let service: ApplyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(ApplyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
