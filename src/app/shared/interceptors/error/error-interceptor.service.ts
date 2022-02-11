import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BroadcastService } from '@shared/services/broadcast.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(public BroadcastSvc: BroadcastService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status >= 200 && event.status <= 204) {
            this.BroadcastSvc.messagesHttp.next(['successful process']);
          }
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.BroadcastSvc.messagesHttp.next(err.error.errors);
        }

        if (err.status === 0) {
          this.BroadcastSvc.messagesHttp.next(['No response from server']);
        }

        return throwError(err);
      })
    );
  }
}
