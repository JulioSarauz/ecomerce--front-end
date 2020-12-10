import { Component, OnInit, Inject } from '@angular/core';
import { ClienteComponent, pagoData } from '../cliente.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagoService } from '../../../modelo/servicios/pago/pago.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from '../../../modelo/servicios/tarjeta/tarjeta.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  isLinear = true;
  pagos:Array<pago>=[];
  pago:pago;
  customers:Customer[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  first = 0;
  usuario:any;
  rows = 10;
  tipoPago:number;
  select:string;
  select2:string;


  constructor(
    private _formBuilder: FormBuilder,
    private readonly _pagoService:PagoService,
    private readonly _tarjetaService:TarjetaService,
    public dialogRef: MatDialogRef<ClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: pagoData) {}

  ngOnInit(){

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.nullValidator],
      selectPago: ['',Validators.nullValidator]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });



   this._pagoService.obtenerProductos().subscribe((pagos)=>{
     for(let pago of pagos.data){
        this.pago={id:pago.id_pago,tipo:pago.tipo};
        this.pagos.push(this.pago)
     }});

     this.usuario = JSON.parse(localStorage.getItem('ClienteData'))
     this._tarjetaService.obtenerTarjetas(this.usuario.id_usuario).subscribe((customers) => {
      this.customers = customers.data});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  siguienteFunc(){
    this.tipoPago = +this.select;
    console.log(this.select);
    
    
  }

}

interface pago{
  id:number
  tipo:string
}

interface Customer{
  codigo:string;
  fecha:number;
  cvv:number;
}