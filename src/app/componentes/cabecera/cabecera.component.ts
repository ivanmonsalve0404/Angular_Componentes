import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  public tipoOperacion: String;

  constructor(){
    this.tipoOperacion = "Par";
  }
}
