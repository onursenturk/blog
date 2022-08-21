import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog:any;
  
   id = null;

   title: any;

   content: any;

   description: any;


  constructor(private service:BlogsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
   
      });

    this.service.getSelectedBlog(this.id)
    .subscribe(response => {
      this.blog = response;
    
    });

    setTimeout(() => {
      console.log('log2',this.blog);
      this.title = this.blog['0']['title'];
      this.content = this.blog['0']['content'];
      this.description = this.blog['0']['description'];
    }, 100);

    
  }

  saveChanges(){
  }


}
