import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ClienteComponent } from '../cliente.component';
import { PagoComponent } from '../pago/pago.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  acu:number=0;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    
  ) { }

  ngOnInit(): void {
    console.log(this.data); 
  }

  quitarCarrito(item){
    this.data.forEach((items) => {
      if(items.id_producto === item.id_producto){
        this.data.pop();
      }
    });
  }


  productoTotal(valor1:number, valor2:number){
    let producto = valor1 * valor2;
    return producto;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  
  obtenerPaga(): void {
    this.onNoClick();
    const dialogRef = this.dialog.open(PagoComponent, {
      width: '800px',
      height: '80%',
      data: this.data
    });
    dialogRef.afterClosed().subscribe(result => {  
    });
  }

}
