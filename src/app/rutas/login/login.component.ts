import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegistroComponent } from './registro/registro.component';
import { LoginService } from '../../modelo/servicios/login/login.service';
import { ClienteService } from '../../modelo/servicios/cliente/cliente.service';


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
//---------------
  ingresoUsuario:string;
  ingresoContra:string;


  constructor(
    public dialog: MatDialog,
    public messageService: MessageService,
    private router:Router,
    public loginservice:LoginService,
    public _clienteService: ClienteService
  ) { }

  ngOnInit(): void {
   
    

  }

  ingresar(){
    let exito = 0;
    this.loginservice.buscarUsuarios().subscribe(usuarios=>{
      
      console.log(usuarios.data);
        for(let user of usuarios.data ){

           if(user.user == this.ingresoUsuario){
             if(user.pass == this.ingresoContra){
              exito = 1;
              console.log(JSON.stringify(user));
              
              localStorage.setItem('ClienteData',JSON.stringify(user));
              this.router.navigate(['cliente']);
             }
           }  
        }
        if(exito===0)
        this.mostrarMensaje(3,'ERROR','Datos incorrectos');
        
    });
    //
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
      width: '800px',
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


    //REGISTRO
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
              

          
              this.guardarInfo(result);
            


            
            this.mostrarMensaje(1,'Exito','Su cuenta fue creada!');
            
            
          }else{
            this.mostrarMensaje(3,'Contraseña Incorrecta','Las contraseñas no son iguales');
          }
        }else{
          console.log("NO TIENE DATOS");
          this.mostrarMensaje(3,'Datos Incompletos','Debe completar todos los campos');
        }
    });
  }


  async guardarInfo(result){
    console.log("****SERVICIO*****");
    await this.loginservice.ingresoUsuario(result.user,result.pass).subscribe((newuser)=>{
      this.loginservice.buscarUsuarios().subscribe((user)=>{
        let idUsuario=user.data.length;
        console.log(user.data.lenght);
        
        console.log(idUsuario);
        
        this._clienteService.ingresoCliente(result.name, result.cedula, result.correo, result.telefono, result.direccion,idUsuario);
      });
    });
    
       
  }

}

