import { Component, inject } from '@angular/core';
import { Post } from '../../modelos/post';
import { PostService } from '../../servicios/post-service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  posts: Post[] = [];
  newPost: Post = { title: '', body: '' };

  private postService = inject(PostService);

  ngOnInit(): void {
    this.postService.getItems<Post>('posts').subscribe((data: Post[]) => {
      this.posts = data.slice(0, 10); 
      console.log('Posts cargados:', this.posts);
    });
    console.log('Posts cargados antes del observable: ', this.posts.length);
  }

  addPost(): void {
    this.postService.createItem<Post>('posts', this.newPost).subscribe((createdPost: Post) => {
      this.posts.unshift(createdPost);
      this.newPost = { title: '', body: '' };
    });
  }
}
