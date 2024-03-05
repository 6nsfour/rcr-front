import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {}

  //TODO : fetch les resources avec le back.
  resources = [1,2,3,4,5,6,7,9,9,9]
  logout(): void {
    this.cookieService.delete('authToken');
    this.router.navigate(['login']);
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }

  checkRight(): void {
    const tokenData = this.cookieService.get('authToken');
    console.log(tokenData);
    
  }
}
