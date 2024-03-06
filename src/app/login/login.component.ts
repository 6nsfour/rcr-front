import { Component } from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router, UrlTree} from "@angular/router";
import { LoginForm } from "../model/authentification";
import { AuthentificationService } from "../service/authentification.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthentificationService,
  ) {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  salut = false

  login(): void {

    const body: LoginForm = {
      email: this.loginForm.getRawValue().email,
      password: this.loginForm.getRawValue().password,
    }

    this.authService.login(body).subscribe((data: any) => {
      this.router.navigate(['home']);
    });
  }

  goToRegister(): Promise<boolean> {
    return this.router.navigate(['register'])
  }
}
