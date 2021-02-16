import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, SelectItem, MessageService } from 'primeng/api';
import { ProductoComponent } from './producto/producto.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../modelo/servicios/producto/producto.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { PagoComponent } from './pago/pago.component';
import { style } from '@angular/animations';
import { InfoComponent } from './info/info.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AgregarComponent } from './agregar/agregar.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  products: Product[];
  sortOrder: number;
  sortField: string;
  items: MegaMenuItem[];
  clienteDta:any;
  Nombre:string;
  name:string;
  Admin: number;
  carrito: any[]=[];

  constructor(
      private messageService:MessageService,
      public dialog: MatDialog,
      private readonly _productsService:ProductoService
  ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }



  cargarCliente(){
    this._productsService.obtenerProductos().subscribe((data)=>{
      this.products = data.data;
    });
    
    this.clienteDta = JSON.parse(localStorage.getItem('ClienteData'));
    this.Nombre = this.clienteDta.fk_cliente.nombres;
   this.cargarTipoUsuario(this.Nombre);
    this.mostrarMensaje(1,'Bienvenido','Logeo Exitoso!');
    this.cargaritem();
  }


  cargarTipoUsuario(Nombre:String){
    if(Nombre === 'admin'){
      this.Admin = 1;
    }else{
      this.Admin= 0;
    }
  }


  mostrarMensaje(tipo:number,msm:string,tit:string) {
    if(tipo == 1)
    this.messageService.add({severity:'success', summary:msm, detail:tit});
    if(tipo == 2)
    this.messageService.add({severity:'warn', summary:msm, detail:tit});
    if(tipo == 3)
    this.messageService.add({severity:'error', summary:msm, detail:tit});
  }
  
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  cargaritem(){
    this.items = [
      {
        label:'Bienvenido '+this.Nombre, icon: 'pi pi-fw pi-user'
      },
      {
          label: 'Opciones', icon: 'pi pi-fw pi-cog',
          items: [
              [ 
                  {
                      label: 'Opciones', 
                      items:[{label:'Salir', url:'login'}]
                  }
              ]
          ]
      }
  ]
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ProductoComponent, {
      width: '250px',
      height: '50%',
      data: {name: "Prods"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._productsService.IngresarProducto(result.nombre, result.descripcion, result.precio).subscribe((ingreo)=>{
          this._productsService.obtenerProductos().subscribe((data)=>{
            this.products = data.data;
            
          });
        });
       
      }else{
     
        this.mostrarMensaje(3,"ERROR","Ingrese datos");
        
      }
      
    });
  }





  openDialogTarjeta(): void {  
    const dialogRef = this.dialog.open(TarjetaComponent, {
      width: '800px',
      height: '80%',
      data: {name: "Tarjetas"}
    });
    dialogRef.afterClosed().subscribe(result => {   
    });
  }




  
  verInformacion(): void {
    const dialogRef = this.dialog.open(InfoComponent, {
      width: '700px',
      height: '60%',
      data: {name: "Informacion"}
    });
    dialogRef.afterClosed().subscribe(result => {   
    });
  }

  ingresarNumeroProductos(item): void {
    const dialogRef = this.dialog.open(AgregarComponent, {
      width: '250px',
      height: '40%',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.agregarCarrito(item,result);
    });
  }




  eliminarProducto(id,nombre,descripcion,precio){
    this._productsService.eliminarProducto(id,nombre,descripcion,precio,0).subscribe((res)=>{
      this._productsService.obtenerProductos().subscribe((data)=>{
        this.products = data.data;
      });
    });
  }

  agregarCarrito(item,numero){
    this.mostrarMensaje(1,"Producto agregado con exito","EXITO");
    item.numero = numero;
    item.total = item.precio * numero;
    this.carrito.push(item);
  }

  limpiarCarrito(){

  }

  verCarrito(): void {
    const dialogRef = this.dialog.open(CarritoComponent, {
      width: '700px',
      height: '60%',
      data: this.carrito
    });
    dialogRef.afterClosed().subscribe(result => {   
    });
  }





}





export interface Product {
  name:string;
  descripcion:string;
  precio:string;

}
export interface DialogData {
  id:number;
  nombre:string;
  descripcion:string;
  precio:string;
}

export interface TarjetaData{
  codigo:string;
  fecha:number;
  cvv:number;
}


export interface pagoData{
  id_pago:string;
  tipo:number;
}
