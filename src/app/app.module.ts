import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//IMPORTACIONES DE PRIMENG
import {MegaMenuModule} from 'primeng/megamenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PickListModule} from 'primeng/picklist';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './rutas/login/login.component';
import { ClienteComponent } from './rutas/cliente/cliente.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent
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
    InputTextModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
