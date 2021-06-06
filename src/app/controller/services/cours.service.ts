import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }


  getList(){
    return this.http.get('http://127.0.0.1:8000/api/list');
  }

  getItem(pk){
    return this.http.get('http://127.0.0.1:8000/api/list/'+pk+'');
  }


}
