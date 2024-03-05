import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";
import {RegisterForm} from "../model/authentification";
export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
constructor(
  private router : Router,
  private authService: AuthentificationService,
){

}
  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(StrongPasswordRegx)])),
    confirmPassword: new FormControl('', Validators.compose([confirmPasswordValidator, Validators.required])),
  }, {validators: confirmPasswordValidator});

  emailWrong : boolean = false;

  Register(): void {

    const body: RegisterForm = {
      firstname: this.registerForm.getRawValue().firstname,
      lastname: this.registerForm.getRawValue().lastname,
      email: this.registerForm.getRawValue().email,
      password: this.registerForm.getRawValue().password,
    }

    this.authService.register(body).subscribe((response: any) => {
        console.log('ahahahahahaha');
        if (response.error == "email_error") {
          return this.emailWrong = true;
        }

        return this.router.navigate(['login'])
    })
  }
}
