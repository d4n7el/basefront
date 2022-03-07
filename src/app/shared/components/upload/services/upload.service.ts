import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  upload(file: File, url: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('type', 'banc_confirmation_letter');
    formData.append('description', 'file');
    const req = new HttpRequest('POST', `${url}`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }
}
