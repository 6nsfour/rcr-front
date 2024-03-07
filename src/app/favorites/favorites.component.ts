import { Component } from '@angular/core';
import {FavoritesService} from "../service/favorites.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Subscription} from "rxjs";
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  constructor(
    private favoritesService: FavoritesService,
    private resourceService: ResourceService,
  ) {}

  filteredFavorite: any = null;

  ngOnInit(): void {
    this.getFavorites("1")
  }

  goToResourcePanel(id: any): void { 
    this.resourceService.goToResourcePanel(id)
  }


   getFavorites(user_id: String): Subscription {
    return this.favoritesService.getFavorites().subscribe({
      next: (favorites: any) => {
        console.log(favorites);
        this.filteredFavorite =  favorites.filter((favorite: any) => favorite.user_id === user_id);
      },
      error: err => console.log(err)
    })
  }


}
