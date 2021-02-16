import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string;
  data:any;
  
  constructor(private http: HttpClient) { }


  ingresoUsuario(duser,dpass): Observable<any>{
    this.url=`${environment.host}/usuario`;
    return this.http.post(this.url,{
      user: duser,
      pass: dpass
    })
  }


  buscarUsuarios(): Observable<any>{
    return this.http.get(`${environment.host}/usuario`);
  }
  buscarUsuariosxNombre(usr): Observable<any>{
    return this.http.get(`${environment.host}/usuario/${usr}`);
  }
  

}