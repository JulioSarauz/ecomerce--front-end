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

  regresar(){
    this.router.navigate(['inicio']);
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
      height: '75%',
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
      
      if(result!== undefined){
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
              if(result.cedula.length === 10){  
                if(this.soloNumeros(result.cedula)){
                if(this.validarCorreo(result.correo)){
                  if(this.soloNumeros(result.telefono)){
                      result.name = result.name.toUpperCase(); 
                      this.guardarInfo(result);
                      this.mostrarMensaje(1,'Exito','Su cuenta fue creada!');
                  }else{
                    this.mostrarMensaje(3,'Teléfono no válido','Telefono solo debe tener números');
                  }                
                }else{
                  this.mostrarMensaje(3,'Correo Inválido','Ingrese un correo válido');
                }
              }else{
                this.mostrarMensaje(3,'Cedula Incorrecta','La cédula debe tener solo caracteres numéricos');
              }
              }else{
                this.mostrarMensaje(3,'Cedula Incorrecta','La cédula debe tener 10 caracteres');
              }
            }else{
              this.mostrarMensaje(3,'Contraseña Incorrecta','Las contraseñas no son iguales');
            }
          }else{
            console.log("NO TIENE DATOS");
            this.mostrarMensaje(3,'Datos Incompletos','Debe completar todos los campos');
          }
      }else{
        this.mostrarMensaje(2 ,'Registro Cancelado','Acaba de cancelár su registro');
      }
      
    });
  }

  validarCorreo(correo: string){
      let pasa = false;
      let aux = correo.split('.');
      let aux2 = correo.split('.com');
      let aux3 = correo.split('.es');
      let aux4 = correo.split('@');
      if(aux.length > 1 && aux4.length > 1&&  (aux2.length > 1 || aux3.length > 1)){
        pasa = true;
      }
      return pasa;
  }


  soloNumeros(cadena){
    let pasa = false;
    let numeros = [0,1,2,3,4,5,6,7,8,9]
    for(let c of cadena){
      if(c in numeros){
        pasa = true;
      }else{
        return pasa = false;
      }
    }
    return pasa;
  }

 async guardarInfo(result){
    console.log("****SERVICIO*****");
    await this.loginservice.ingresoUsuario(result.user,result.pass).subscribe( async (dta)=>{
     
      await this.loginservice.buscarUsuariosxNombre(dta.data.user).subscribe(async (user)=>{
        console.log(user);
        await this.crearcliente(result,user);
      });
      
    });
  }

  crearcliente(result,user){
    this._clienteService.ingresoCliente(result.name, result.cedula, result.correo, result.telefono, result.direccion,user.id_usuario);  
  }
  

}

