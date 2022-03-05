import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ImageModel } from 'src/app/models/image.mode';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css'],
})
export class DetailedComponent implements OnInit {
  public recipe: Recipe | undefined;
  public isLoading: Boolean = true;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
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
          this.isLoading = false;
        }
      );
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
