import { TestBed } from '@angular/core/testing';

import { AuthInterceprtorService } from '@app/shared/interceptors/auth/auth-interceptor.service';

describe('AuthInterceprtorService', () => {
  let service: AuthInterceprtorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceprtorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
