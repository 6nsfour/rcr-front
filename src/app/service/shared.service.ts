import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {



  constructor(
    private cookieService: CookieService,
  ) { }

  apiUrl = 'http://localhost:8080/api';
  authUrl = 'auth';


  getAuthHeaders(): HttpHeaders {
    const authToken = this.cookieService.get('authToken');

    if (authToken) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      });
    } else {
      return new HttpHeaders();
    }
  }
}
