import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http:HttpClient) { 
    this.ROOT_URL = 'http://localhost:4000';
  }

  get(uri:String){
   return this.http.get(`${this.ROOT_URL}/${uri}`);
  } 

  post(uri:String , payload:Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
   }

  patch(uri:String , payload:Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`,payload);
   }

  delete(uri:String){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
   }

   login(email:string , password:string){
    return this.http.post(`${this.ROOT_URL}/users/login`,{
      email,
      password
    },{
      observe:'response'
    });
   }
}
