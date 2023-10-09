import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //contact api fn
  contactFn(name:any,email:any,message:any){
    const body ={
      name,
      email,
      message
    }
    return this.http.post('http://localhost:5000/hireme',body)
  }
}
