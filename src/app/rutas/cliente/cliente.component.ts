import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, SelectItem, MessageService } from 'primeng/api';
import { ProductoComponent } from './producto/producto.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../modelo/servicios/producto/producto.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  products: Product[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  items: MegaMenuItem[];
  clienteDta:any;
  Nombre:string;
  name:string

  constructor(
      private messageService:MessageService,
      public dialog: MatDialog,
      private readonly _productsService:ProductoService
  ) { }

  ngOnInit(): void {
    //this.productService.getProducts().then(data => this.products = data);
    this._productsService.obtenerProductos().subscribe((data)=>{
      console.log(data.data);
      this.products = data.data;
      
    });
    
    this.clienteDta = JSON.parse(localStorage.getItem('ClienteData'));

    console.log(this.clienteDta);
    this.Nombre = this.clienteDta.fk_cliente.nombres;
    this.mostrarMensaje(1,'Bienvenido','Logeo Exitoso!');
    this.cargaritem();
    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];
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
        label:'Bienbenido '+this.Nombre, icon: 'pi pi-fw pi-user'

      } ,
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
      console.log('The dialog was closed');
      this.name = result;
      console.log(result);
      
    });
  }


}



export interface Product {
  name:string;
  descripcion:string;
  precio:string;

}
export interface DialogData {
  nombre:string;
  descripcion:string;
  precio:string;
}
