import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string;
  data:any;
  
  constructor(private http: HttpClient) { }


  ingresoCliente(nombre,cedula,correo,telefono,direccion,idusuario){
    this.url=`${environment.host}/cliente`;
    return this.http.post(this.url,{
      clienteDto:{
        nombres:nombre,
        cedula:cedula,
        correo:correo,
        telefono:telefono,
        direccion:direccion
      },
      idUsuario:idusuario
    }).subscribe(res=>{
      console.log(res);
      
      return res;
    });
  }


  buscarUsuarios(): Observable<any>{
    return this.http.get(`${environment.host}/cliente`);
  }
}
