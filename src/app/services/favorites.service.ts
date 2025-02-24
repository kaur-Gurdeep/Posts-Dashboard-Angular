import { Injectable } from '@angular/core';
import { Post } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Post[] = [];

  getFavorites(): Post[] {
    return this.favorites;
  }

  addToFavorites(post: Post): void {
    if (!this.isFavorite(post.id)) {
      this.favorites.push(post);
    }
  }

  removeFromFavorites(postId: number): void {
    this.favorites = this.favorites.filter(p => p.id !== postId);
  }

  isFavorite(postId: number): boolean {
    return this.favorites.some(p => p.id === postId);
  }
}
