import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordRepeat: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.min(2)]),
    lastName: new FormControl('', [Validators.required, Validators.min(3)]),
    dateOfBirth: new FormControl('', [Validators.required]),
  })

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  onSubmit() : void {
    if (this.registerForm.valid) {
      alert('Logged in as: ' + this.registerForm.get('email')?.value + ' ' + this.registerForm.get('password')?.value)
    }
  }

}
