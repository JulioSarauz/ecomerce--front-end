import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string;
  data:any;
  
  constructor(private http: HttpClient) { }


  ingresoUsuario(duser,dpass){
    this.url="http://localhost:3000/usuario";
    return this.http.post(this.url,{
      user: duser,
      pass: dpass
    }).subscribe(res=>{
      return res;
    });
  }


  buscarUsuarios(): Observable<any>{
    return this.http.get("http://localhost:3000/usuario");
  }

}