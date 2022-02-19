import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css'],
})
export class DetailedComponent implements OnInit {
  public recipe: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeService
      .getSpecificRecipe(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (resp) => {
          this.recipe = resp;
        },
        (error) => {
          this.router.navigate(['/recipes']);
        }
      );
  }
}
