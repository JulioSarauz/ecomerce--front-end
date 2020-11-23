import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { RegistroComponent } from './registro/registro.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string;
  name: string;
  cedula: string;
  correo: string;
  telefono: string;
  direccion: string;
  pass:string;
  pass2:string;


  constructor(
    public dialog: MatDialog,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
   
    

  }

 

  mostrarMensaje(tipo:number,msm:string,tit:string) {
    if(tipo == 1)
    this.messageService.add({severity:'success', summary:msm, detail:tit});
    if(tipo == 2)
    this.messageService.add({severity:'warn', summary:msm, detail:tit});
    if(tipo == 3)
    this.messageService.add({severity:'error', summary:msm, detail:tit});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '250px',
      data: {
        user: this.user,
        name: this.name,
        cedula: this.cedula,
        correo: this.correo,
        telefono: this.telefono,
        direccion: this.direccion,
        pass:this.pass,
        pass2:this.pass2,

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(
        result.user !== undefined &&
        result.name !== undefined &&
        result.cedula !== undefined &&
        result.correo !== undefined &&
        result.telefono !== undefined &&
        result.direccion !== undefined &&
        result.pass !== undefined &&
        result.pass2 !== undefined
        ){

          if(result.pass == result.pass2){

            console.log("TIENE DATOS");
          }else{
            this.mostrarMensaje(3,'Las contraseñas no son iguales','Contraseña Incorrecta');
          }
        }else{
          console.log("NO TIENE DATOS");
          this.mostrarMensaje(3,'Debe completar todos los campos','Datos Incompletos');
        }
    });
  }


}
