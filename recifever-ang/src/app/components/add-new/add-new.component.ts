import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  addNewRecipeForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
    preparationTime: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    coockingTime: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    calories: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    difficuilty: new FormControl('1-5', [Validators.required]),
    dailyMeal: new FormControl('', [Validators.required]),
    igredient: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z]/g)]),
    amount: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    measurement: new FormControl('', [Validators.required]),
    stepTextFrom: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z]/g)])
  })

  @ViewChild('fileTable') inputFileTable: any; 

  constructor() { }

  ngOnInit(): void {
  }

  ngOnSubmit(): void {
    alert('You have submited the form') 
  }

  ngOnFileSelected(event: any): void {
    // This takes the file name and puts it in the disabled input
    this.inputFileTable.nativeElement.value += event.target.files[0].name
  }

}
