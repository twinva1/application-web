import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
//
import { environment } from 'environments/environment';

@Injectable()
export class AppHttpInteceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if (req.url.startsWith('/expense/')) {
      req = req.clone({ url: `${environment.expenseBaseUrl}${req.url.replace('/expense/', '/')}` });
      return next.handle(req);
    }
    if (req.url.startsWith('/user/')) {
      req = req.clone({ url: `${environment.userBaseUrl}${req.url.replace('/user/', '/')}` });
      return next.handle(req);
    }
    if (req.url.startsWith('/')) {
      req = req.clone({ url: `${environment.userBaseUrl}${req.url}` });
    }
    return next.handle(req);
  }
}
