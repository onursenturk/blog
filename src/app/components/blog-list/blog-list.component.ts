import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs:any;

  dtOptions: DataTables.Settings = {};
 
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private service:BlogsService) { }


  ngOnInit(): void {

    this.service.getAllBlogs()
    .subscribe(response => {
      this.blogs = response;
    
      this.dtTrigger.next(this.blogs);

      
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
 
  }



}
