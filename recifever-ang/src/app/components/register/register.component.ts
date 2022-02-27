import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordRepeat: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.min(2)]),
    lastName: new FormControl('', [Validators.required, Validators.min(3)]),
    dateOfBirth: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert("Zagnal sem se")
    if (this.registerForm.valid) {
      alert("In tu noter")
      const newUser: User = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        birthDate: this.registerForm.get('dateOfBirth')?.value,
      };

      this.userService.createUser(newUser).subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (err) => alert('Something went wrong with the server')
      );
    }
  }
}
