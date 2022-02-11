import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postSrvc = <T>(url: string, data: any): Observable<T> => {
    return this.http.post<T>(url, data).pipe(
      map((resp: T) => {
        return resp as T;
      })
    );
  };

  getSrvc = <T>(url: string): Observable<T> => {
    return this.http.get<T>(url).pipe(
      map((resp: T) => {
        return resp as T;
      })
    );
  };

  putSrvc = <T>(url: string, data: any): Observable<T> => {
    return this.http.put<T>(url, data).pipe(
      map((resp: T) => {
        return resp as T;
      })
    );
  };

  patchSrvc = <T>(url: string, data: any): Observable<T> => {
    return this.http.patch<T>(url, data).pipe(
      map((resp: T) => {
        return resp as T;
      })
    );
  };

  deleteSrvc = <T>(url: string): Observable<T> => {
    return this.http.delete<T>(url).pipe(
      map((resp: T) => {
        return resp as T;
      })
    );
  };
}
