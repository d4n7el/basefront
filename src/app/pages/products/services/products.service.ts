import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
import { HttpService } from '@shared/services/http.service';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpService) {}
  products = (): Observable<any> => {
    const url = `${environment.API_URL}/products`;
    return this.http.getSrvc<any>(url).pipe(
      map((resp: any) => {
        return resp as any;
      })
    );
  };
}
