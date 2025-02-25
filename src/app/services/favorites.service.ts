import { Injectable } from '@angular/core';
import { Post } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Post[] = [];

  constructor() {
    this.loadFavorites(); 
    }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  getFavorites(): Post[] {
    return this.favorites;
  }

  addToFavorites(post: Post): void {
    if (!this.isFavorite(post.id)) {
      this.favorites.push(post);
      this.saveFavorites(); 
    }
  }

  removeFromFavorites(postId: number): void {
    this.favorites = this.favorites.filter(p => p.id !== postId);
    this.saveFavorites(); 
  }

  isFavorite(postId: number): boolean {
    return this.favorites.some(p => p.id === postId);
  }
}
