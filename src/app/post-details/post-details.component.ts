import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
// import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  providers: [CategoryService]
})
export class PostDetailsComponent implements OnInit {
  categoryId: string;
  postId: string;
  postToDisplay;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['cid'];
      this.postId = urlParameters['pid'];
    });
    this.postToDisplay = this.postService.getPostById(this.categoryId, this.postId);
  }


}
