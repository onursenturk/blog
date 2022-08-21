import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private endpoint = 'https://ngx-training.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAllBlogs(){

    return this.httpClient.get(this.endpoint);

  }

  getSelectedBlog(id:any){
    return this.httpClient.get(this.endpoint + '/?id=' + id);
  }

}
