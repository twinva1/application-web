import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
//
import { environment } from 'environments/environment';

@Injectable()
export class AppRequestInteceptor implements HttpInterceptor {
  constructor() {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ts = (+new Date()).toString().slice(7);
    console.log(`[INTERCEPT][${ts}]`, req);
    if (req.url.startsWith('/expense/')) {
      req = req.clone({ url: `${environment.expenseBaseUrl}${req.url.replace('/expense/', '/')}` });
    } else if (req.url.startsWith('/user/')) {
      req = req.clone({ url: `${environment.userBaseUrl}${req.url.replace('/user/', '/')}` });
    } else if (req.url.startsWith('/')) {
      req = req.clone({ url: `${environment.apiBaseUrl}${req.url}` });
    }
    return next.handle(req).pipe(tap((res) => console.log(`[INTERCEPT][${ts}]`, res)));
  }
}

@Injectable()
export class AppResponseInteceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          if (res.body && res.body.code && res.body.code !== 200) {
            this.snackBar.open(res.body.msg || `FAIL : [${req.method}] ${req.url}`, 'Close');
          }
        }
      }),
      catchError((e) => {
        console.log('error:', e);        
        this.snackBar.open(`${e.name} : ${e.statusText}`, 'Close');
        return throwError(e);
      })
    );
  }
}
