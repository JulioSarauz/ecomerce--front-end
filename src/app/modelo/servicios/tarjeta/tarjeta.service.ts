import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  url:string;
  data:any;

  constructor(private http: HttpClient) { }


  IngresarTarjetas(codigo,fecha,cvv,idusuario): Observable<any>{
    this.url=`${environment.host}/tarjeta`;
    return this.http.post(this.url,{
      datosTarjeta:{
      codigo:codigo,
      fecha:fecha,
      cvv:cvv,
      estado:1
     },
     idUsuario:idusuario
    });
  }


  obtenerTarjetas(id:number): Observable<any>{
    return this.http.get(`${environment.host}/tarjeta?id=${id}`);
}
}