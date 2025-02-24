import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Response } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://dummyjson.com/posts';

  constructor(
    private http: HttpClient
  ) {}

  getAllPosts(): Observable<Response> {
    return this.http
      .get<Response>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
}