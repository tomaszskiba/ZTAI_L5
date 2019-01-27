import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DataService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll() {
    //return this.http.get(this.url + '/api/posts').pipe(map((x: any[])=> x));
    return this.http.get(this.url + '/api/posts');
  }

  getOne(id) {
    return this.http.get(this.url + '/api/posts/' + id).pipe();
  }
  get(id){
    return this.http.get(this.url + '/api/posts/' + id)
  }

  addPost(data){
    return this.http.post(this.url + '/api/post/',  data).pipe();
  }

  createNewOrUpdate(post){
        return this.http.post(this.url + '/api/post', post);
      }
}
