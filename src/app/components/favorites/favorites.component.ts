import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Post } from '../../models/posts.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  constructor(private favoritesService: FavoritesService) {}

  // Get the current favorites list
  get favorites(): Post[] {
    return this.favoritesService.getFavorites();
  }

  // Remove a post from favorites
  removeFromFavorites(postId: number): void {
    this.favoritesService.removeFromFavorites(postId);
  }
}
