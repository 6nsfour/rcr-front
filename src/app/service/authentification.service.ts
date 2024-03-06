import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginForm, RegisterForm } from '../model/authentification';
import { SharedService } from './shared.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private sharedService: SharedService,
  ) {}

  login(data: LoginForm): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.post(`${this.sharedService.apiUrl}/auth/login`, data, { headers }).pipe(
      tap((response: any) => {
        const token = response.token;
        if (token) {
          this.cookieService.set('authToken', token);
        }
      })
    );
  }

  register(data: RegisterForm): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.post(`${this.sharedService.apiUrl}/auth/register`, data, { headers })

  }
}
