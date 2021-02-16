import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteComponent,  TarjetaData } from '../cliente.component';
import { TarjetaService } from '../../../modelo/servicios/tarjeta/tarjeta.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  customers: Customer[];

  first = 0;
  usuario:any;
  rows = 10;


  constructor(
    private readonly _tarjetaService:TarjetaService,
    public dialogRef: MatDialogRef<ClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TarjetaData) {}

  ngOnInit(){
    this.usuario = JSON.parse(localStorage.getItem('ClienteData'))
    this._tarjetaService.obtenerTarjetas(this.usuario.fk_cliente.id_cliente).subscribe((customers) => {
      this.customers = customers.data});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTarjeta(){
    console.log(this.usuario.fk_cliente);
    if(this.data.codigo !== undefined && this.data.fecha !== undefined && this.data.cvv !== undefined ){

      this._tarjetaService.IngresarTarjetas(this.data.codigo,this.data.fecha,this.data.cvv,this.usuario.fk_cliente.id_cliente).subscribe((res)=>{
        this._tarjetaService.obtenerTarjetas(this.usuario.fk_cliente.id_cliente).subscribe((tarjetas)=>{
          console.log(tarjetas);
          
          this.customers = tarjetas.data
        });
      });
    }
    
  }

}
interface Customer{
  codigo:string;
  fecha:number;
  cvv:number;
}