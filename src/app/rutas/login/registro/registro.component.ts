import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
export interface DialogData {
  user: string;
  name: string;
  cedula: string;
  correo: string;
  telefono: string;
  direccion: string;
  pass:string;
  pass2:string;
}