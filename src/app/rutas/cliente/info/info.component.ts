import { Component, OnInit, Inject } from '@angular/core';
import { ClienteComponent } from '../cliente.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  clienteAux:any;
  clienteDta:cliente;


  constructor(
    public dialogRef: MatDialogRef<ClienteComponent>
    ) {}

  ngOnInit(): void {
    this.clienteAux = JSON.parse(localStorage.getItem('ClienteData'));
    this.clienteDta = this.clienteAux.fk_cliente;
    console.log(this.clienteDta);
    console.log(this.clienteDta);
    
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}

interface cliente{
  id_cliente:number;
  cedula:string;
  correo:string;
  direccion:string;
  nombres:string;
  telefono:string;
}