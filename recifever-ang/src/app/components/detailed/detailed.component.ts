import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ImageModel } from 'src/app/models/image.mode';
import { IngredientModel } from 'src/app/models/ingredient.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css'],
})
export class DetailedComponent implements OnInit {
  displayedColumns: string[] = ['ingredient', 'amount', 'measurement'];
  ingredientSource: IngredientModel[] = []
  public recipe: Recipe | undefined;
  public recipeUser: User | undefined;
  public isLoading: Boolean = true;
  
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private userService: UserService
  ) {
  }

  imagesInQueue: ImageModel[] = []

  ngOnInit(): void {
    this.recipeService
      .getSpecificRecipe(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (resp) => {
          this.recipe = resp;
          this.loadImagesInQueue()
          this.ingredientSource = this.recipe?.ingredients as IngredientModel[]
          this.getRecipeUser();
          this.isLoading = false;
        }
      );
  }

  private getRecipeUser() {
    this.userService.getSpecificUser(this.recipe?.userID as string)
    .subscribe(
      (resp) => {
        this.recipeUser = resp;
      }
    )
  }

  private loadImagesInQueue() {
    if(this.recipe?.photos) {
      for(const photo of this.recipe.photos) {
        this.imagesInQueue.push({
          path: photo
        })
      }
    }
  }
}
