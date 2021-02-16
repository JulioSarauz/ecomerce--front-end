import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteComponent } from '../cliente.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  nombre:string;
  numero:string;

  constructor(
    private messageService:MessageService,
    public dialogRef: MatDialogRef<ClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.nombre = this.data.nombre;
  }

  
  mostrarMensaje(tipo:number,msm:string,tit:string) {
    if(tipo == 1)
    this.messageService.add({severity:'success', summary:msm, detail:tit});
    if(tipo == 2)
    this.messageService.add({severity:'warn', summary:msm, detail:tit});
    if(tipo == 3)
    this.messageService.add({severity:'error', summary:msm, detail:tit});
  }



  onNoClick(): void {
    try{
      let num = +this.numero;
      if(num){
        this.dialogRef.close(num);
      }else{
        this.mostrarMensaje(3,"Solo ingresar numeros","ERROR");
      }
    }catch(err){
      this.mostrarMensaje(3,"Solo ingresar numeros","ERROR");
    }
  }

}
