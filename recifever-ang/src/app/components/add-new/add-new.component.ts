import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

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
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
export class AddNewComponent implements OnInit {
  @ViewChild('fileTable')
  inputFileTable!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private recipeService: RecipeService,
    private router: Router
  ) {}
  
  filesToUpload : File[] = []

  addNewRecipeForm = this.formBuilder.group({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    preparationTime: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    coockingTime: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    calories: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    difficuilty: new FormControl('1-5', [Validators.required]),
    dailyMeal: new FormControl('', [Validators.required]),
    ingredients: this.formBuilder.array([]),
    steps: this.formBuilder.array([]),
    photos: new FormControl('')
  });

  ngOnInit(): void {
    this.ngAddStep(); // To add the first field
    this.ngAddIngredient(); // To add the first field
  }

  ngOnSubmit(): void {
    if (this.addNewRecipeForm.valid) {
      if (this.filesToUpload.length > 0) {
        const formData = new FormData();
      Array.from(this.filesToUpload).map((file, index) => {
        return formData.append('file'+ index, file, file.name);
      })
      this.recipeService.uploadFiles(formData)
      .subscribe(() => { console.log("Success") },
      (err) => {
         console.log(`Something went wrong ${err}`)
    });
      }
      const newRecipe: Recipe = {
        title: this.addNewRecipeForm.get('title')?.value,
        userID: this.getUserId(),
        preperationTime: Number(this.addNewRecipeForm.get('preparationTime')?.value),
        cookingTime: Number(this.addNewRecipeForm.get('coockingTime')?.value),
        calories: Number(this.addNewRecipeForm.get('calories')?.value),
        difficulty: Number(this.addNewRecipeForm.get('difficuilty')?.value),
        dailyMeal: Number(this.addNewRecipeForm.get('dailyMeal')?.value),
        photos: this.filesToUpload.length > 0 ? this.inputFileTable?.nativeElement.value.trim().split(' ') : [''],
        ingredients: this.addNewRecipeForm.get('ingredients')?.value,
        steps: this.addNewRecipeForm.get('steps')?.value.map((x: { step: any; }) => {
          return x.step
        }),
      };
      console.log(newRecipe)
      this.recipeService.createRecipe(newRecipe).subscribe(
        () => {
          this.router.navigate(['/recipes']);
          console.log(newRecipe);
        },
      );
    }
  }

  ngAddStep(): void {
    this.stepFieldAsFormArray.push(this.step());
    this.cd.detectChanges();
  }

  ngAddIngredient(): void {
    this.ingredientAsFormArray.push(this.ingredient());
    this.cd.detectChanges();
  }

  ngOnFileSelected(event: any): void {
    // This takes the file name and puts it in the disabled input
    this.inputFileTable.nativeElement.value += event.target.files[0].name + ' ';
    this.filesToUpload.push(event.target.files[0]);
  }

  get stepFieldAsFormArray(): FormArray {
    return this.addNewRecipeForm.get('steps') as FormArray;
  }

  get ingredientAsFormArray(): FormArray {
    return this.addNewRecipeForm.get('ingredients') as FormArray;
  }

  step(): any {
    return this.formBuilder.group({
      step: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/[A-Za-z]/g),
      ]),
    });
  }

  ingredient(): any {
    return this.formBuilder.group({
      igredient: new FormControl('', [
        Validators.required,
        Validators.pattern(/[A-Za-z]/g),
      ]),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      measurement: new FormControl('', [Validators.required]),
    });
  }

  private getUserId(): string {
    const token: string = localStorage.getItem('jwt') as string;
    const decodedJWT = JSON.parse(window.atob(token.split('.')[1]));

    return decodedJWT.userId;
  }
}
