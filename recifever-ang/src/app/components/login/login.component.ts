import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginModel } from 'src/app/models/login.model';
import { JsonWebToken } from 'src/app/models/token.model';
import { UserService } from 'src/app/services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      // alert('Logged in as: ' + this.loginForm.get('email')?.value + ' ' + this.loginForm.get('password')?.value)ž
      const loginData: LoginModel = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.userService.loginUser(loginData).subscribe((response: JsonWebToken | undefined) => {
        console.log(response?.token);
      });
    }
  }
}
