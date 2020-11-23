import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { isEmptyExpression } from '@angular/compiler';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { config } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deber1';
  n:number;
  mensaje:String;

  items: MenuItem[];
  list1: any[];
  list2: any[];
  data: any[];

      ngOnInit() {
        this.list1 = [
          {
            cod:1,
            image:"img1.png",
            name:"Escítala o Espartano",
          },
          {
            cod:2,
            image:"img2.jpg",
            name:"César"
          },
          {
            cod:3,
            image:"img3.png",
            name:"Polybius"
          }
    ];//initialize list 1
        this.list2 = [];//initialize list 2
        

      }

      //FUNCION PARA TRANSFORMAR EL TEXTO
      change(){
        var a = document.getElementById("ans1");
        var b = document.getElementById("ans2");
        var c = document.getElementById("ans3");

        a.innerHTML="";
        b.innerHTML="";
        c.innerHTML="";
        
        if(this.mensaje != null){
        for(let x of this.list2) {
          if(x.cod === 1){
            if(this.n == null)
            this.n = 2;
            a.innerHTML = "<br><h3 style='color:#5d46fc;'>Cifrado Escítala o Espartano (Columnas = "+this.n+"):</h3><br><h4 style='color:white'>"+this.cryp_espar(this.n,this.mensaje.toUpperCase())+"</h4>";
          }
          if(x.cod === 2){
            
            b.innerHTML = "<br><h3 style='color:#5d46fc;'>Cifrado César:</h3><br><h4 style='color:white'>"+this.cryp_cesar(this.mensaje.toUpperCase());+"</h4>";
          }
          if(x.cod === 3){
            c.innerHTML = "<br><h3 style='color:#5d46fc;'>Cifrado Polybius:</h3><br><h4 style='color:white'>"+this.cryp_poly(this.mensaje.toUpperCase());+"</h4>";
          }        
        } 
      }else{
        alert("Ingresa un mensaje para cifrar");
      }
      }
      

      //ALGORITMOS DE ENCRIPTACIÓN
      //ESPARTANO
      
      cryp_espar(n,texto){
       
       let num = 0; 
       let lim = texto.length/n;
       let aux2 = "";
        for (let i = 0; i < lim; i++){
          let aux = "";
          for (let j = 0; j < n; j++){
              if(texto[num] != null)
              aux = aux + texto[num];
              else
              aux = aux + " ";
              num++;
             
          }
          aux2 = aux2 + aux + "*";
        }
        let res = aux2.split("*");
        let ans = "";
        for (let i = 0; i < n; i++ ){
          for(let r of res){
            console.log(r);
            
            if(r[i] != null)
            ans = ans + r[i];
            else
            ans = ans + " "
          }
        }
        return ans.toUpperCase();
        
        
      }
      //CÉSAR
      cryp_cesar(texto){
        this.data = [{A:"D"},{B:"E"},{C:"F"},{D:"G"},{E:"H"},{F:"I"},{G:"J"},{H:"K"},{I:"L"},{J:"M"},{K:"N"},{L:"Ñ"},{M:"O"},{N:"P"},{Ñ:"Q"},{O:"R"},{P:"S"},{Q:"T"},{R:"U"},{S:"V"},{T:"W"},{U:"X"},{V:"Y"},{W:"Z"},{X:"A"},{Y:"B"},{Z:"C"}];
        
        let cif="";
        for (let t of texto){ 
          let res="";
          for (let d of this.data){
            if(d[t] != null)
            res = d[t]
          }
          if(res != ""){
            cif = cif + res;
          }else{
            cif = cif + " ";
          }
        }
        return cif; 
      }
      //POLYBIUS
      cryp_poly(texto){
        this.data = [{A:"AA"},{B:"AB"},{C:"AC"},{D:"AD"},{E:"AE"},{F:"BA"},{G:"BB"},{H:"BC"},{I:"BD"},{J:"BD"},{K:"BE"},{L:"CA"},{M:"CB"},{N:"CC"},{O:"CD"},{P:"CE"},{Q:"DA"},{R:"DB"},{S:"DC"},{T:"DD"},{U:"DE"},{V:"EA"},{W:"EB"},{X:"EC"},{Y:"ED"},{Z:"EE"}];
        
        let cif="";
        for (let t of texto){ 
          let res="";
          for (let d of this.data){
            if(d[t] != null)
            res = d[t]
          }
          if(res != ""){
            cif = cif + res;
          }else{
            cif = cif + "  ";
          }
        }
        return cif; 
      }
      

}

