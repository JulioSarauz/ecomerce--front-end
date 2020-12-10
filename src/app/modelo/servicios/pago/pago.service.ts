import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  url:string;
  data:any;

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any>{
    return this.http.get(`${environment.host}/pago`);
  }
}
