import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { FavoritesService } from '../../services/favorites.service';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/posts.interface';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent {
  post$: Observable<Post | null>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private favoritesService: FavoritesService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post$ = this.postsService.getPostById(id).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }

  toggleFavorite(post: Post): void {
    if (this.favoritesService.isFavorite(post.id)) {
      this.favoritesService.removeFromFavorites(post.id);
    } else {
      this.favoritesService.addToFavorites(post);
    }
  }

  isFavorite(postId: number): boolean {
    return this.favoritesService.isFavorite(postId);
  }
}
