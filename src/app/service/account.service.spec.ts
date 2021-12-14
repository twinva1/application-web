import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(AccountService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('function testing', () => {
    it('login success', () => {
      service.login('admin', '123456').subscribe((response) => {
        expect(response.code).toBe(200);
        expect(response.data.account).toBe('admin');
        expect(service.isAdmin).toBe(true)
      });
      const apiRequest = httpTestingController.expectOne('/user/login');
      expect(apiRequest.request.method).toBe('POST');
      apiRequest.flush({
        code: 200,
        msg: 'Authenticated User',
        data: {
          id: 2,
          name: 'User001',
          account: 'user',
          role_id: 2,
        },
      });
    });

    it('login fail', () => {
      service.login('user', '1234567').subscribe((response) => {
        expect(response.code).not.toBe(200);
        expect(response.data).toBeFalsy();
      });
      const apiRequest = httpTestingController.expectOne('/user/login');
      expect(apiRequest.request.method).toBe('POST');
      apiRequest.flush({
        code: 400,
        msg: 'Unauthenticated User',
      });
    });

    it('logout', () => {
      service.logout();
      expect(service.userInfo.getValue()).toBe(null);
      expect(service.isAdmin).toBe(false);
      expect(localStorage.getItem('malbekUser')).toBe(null);
    });
  });
});
