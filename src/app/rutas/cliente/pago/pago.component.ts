import { Component, OnInit, Inject } from '@angular/core';
import { ClienteComponent, pagoData } from '../cliente.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagoService } from '../../../modelo/servicios/pago/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

 
  first = 0;
  usuario:any;
  rows = 10;


  constructor(
    private readonly _pagoService:PagoService,
    public dialogRef: MatDialogRef<ClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: pagoData) {}

  ngOnInit(){

    


    
   this._pagoService.obtenerProductos().subscribe((pagos)=>{
     console.log(pagos);
   });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}