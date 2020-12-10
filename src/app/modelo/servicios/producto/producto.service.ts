import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string;
  data:any;

  constructor(private http: HttpClient) { }


  IngresarProducto(nombre,descripcion,precio): Observable<any>{
    this.url=`${environment.host}/products`;
    return this.http.post(this.url,{
      nombre:nombre,
      descripcion:descripcion,
      precio:precio,
      estado:1
    });
  }


  obtenerProductos(): Observable<any>{
    return this.http.get(`${environment.host}/products`);
  }
}