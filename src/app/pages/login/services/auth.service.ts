import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
import { UserResponseLogin, UserLogin } from '@login/models/user.interface';
import { HttpService } from '@shared/services/http.service';
import { Router } from '@angular/router';
import { NAME_STORAGE_AUTH } from '@utils/const';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService, private router: Router) {}

  login = (authData: UserLogin): Observable<UserResponseLogin> => {
    const url = `${environment.API_URL}/signin`;

    return this.http.postSrvc<UserResponseLogin>(url, authData).pipe(
      map((resp: UserResponseLogin) => {
        resp.isLoggued = true;
        localStorage.setItem(NAME_STORAGE_AUTH, JSON.stringify(resp));
        return resp as UserResponseLogin;
      })
    );
  };

  logout = (): void => {
    localStorage.removeItem(NAME_STORAGE_AUTH);
  };
}
