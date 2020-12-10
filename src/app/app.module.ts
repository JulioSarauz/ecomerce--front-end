import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//IMPORTACIONES DE PRIMENG
import {MegaMenuModule} from 'primeng/megamenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PickListModule} from 'primeng/picklist';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './rutas/login/login.component';
import { ClienteComponent } from './rutas/cliente/cliente.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistroComponent } from './rutas/login/registro/registro.component';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './rutas/cliente/producto/producto.component';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import { TarjetaComponent } from './rutas/cliente/tarjeta/tarjeta.component';
import {TableModule} from 'primeng/table';
import { PagoComponent } from './rutas/cliente/pago/pago.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    RegistroComponent,
    ProductoComponent,
    TarjetaComponent,
    PagoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    PickListModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    InputTextModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    RouterModule,
    DataViewModule,
    MegaMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    DropdownModule,
    RatingModule,
    TableModule,
    PanelModule,
    DialogModule,
    RippleModule,
    MatStepperModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
