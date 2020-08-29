import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  registro=[];
  cliente:any;
  nombres:string;
  apellidos:string;
  dui:string;
  mascota:string;
  precio:number;
  descuento:number;
  total:number;
  medicamento:string;
  tratamiento:string;
  contador:number;
  visitas:number;
  fecha:Date;

  constructor() { }

  ngOnInit(): void {
    
    this.nombres='';
    this.apellidos='';
    this.dui='';
    this.mascota='';
    this.precio=0;
    this.descuento=0;
    this.total=0;
    this.medicamento='';
    this.tratamiento='';
    this.contador=0;
    this.visitas=0;
    this.fecha = new Date();
  
  }

  ingresarCliente(){

      
      this.descuento = 0;
      this.visitas = 0; //contador de visitas

      for(let i=0; i< this.registro.length; i++){
    
        if ( this.registro[i].dui == this.dui) //Si existe la visita con el dui ingresado en todos los registros 
        {
          this.visitas++; //total de visitas para el dui ingresado
        }
      }

      //aplicando descuentos según condiciones
      if(this.visitas == 2){
        this.descuento = this.precio*0.05;
        this.total = this.precio - this.descuento;
      } 
      else if (this.visitas >= 4){
        this.descuento = this.precio*0.10;
        this.total = this.precio - this.descuento;
      } 
      else{
        this.total = this.precio;
      }

      //guardamos la visita del cliente
      this.cliente={"nombres":this.nombres,"apellidos":this.apellidos,"dui":this.dui,"mascota":this.mascota,"total":this.total,"medicamento":this.medicamento,"tratamiento":this.tratamiento};
      this.registro.push(this.cliente);
      this.contador++;
    }

  }

