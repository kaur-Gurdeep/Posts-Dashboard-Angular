import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { FavoritesService } from '../../services/favorites.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/posts.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent {
  posts$: Observable<Post[]>;

  constructor(
    private postsService: PostsService,
    private favoritesService: FavoritesService
  ) {
    // Transform the response to get just the posts array
    this.posts$ = this.postsService.getAllPosts()
      .pipe(map(response => response.posts));
  }
  // Add your favorite toggle methods here
  // Hint: You'll need methods to:
  // 1. Toggle favorites
  toggleFavorite(post: Post): void {
    const isFav = this.isFavorite(post.id);
    if (isFav) {
      this.favoritesService.removeFromFavorites(post.id);
    } else {
      this.favoritesService.addToFavorites(post);
    }
  }
  // 2. Check if a post is favorited
  isFavorite(postId: number): boolean {
    return this.favoritesService.isFavorite(postId);
  }
}