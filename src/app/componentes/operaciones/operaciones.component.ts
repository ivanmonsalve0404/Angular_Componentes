import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css',
})
export class OperacionesComponent {
  @Input() operacion: String;

  public numero1: number;
  public numero2: number;
  public numero3: number;
  public resultado: boolean;

  constructor() {
    this.operacion = '';
    this.numero1 = 0;
    this.numero2 = 0;
    this.numero3 = 0;

    this.resultado = false;
  }

  public enviarFormulario(formulario: NgForm): void {
    switch (this.operacion.toLocaleLowerCase()) {
      case 'par':
        this.resultado = this.numero1 % 2 === 0;
        break;
      case 'primo':
        if (this.numero1 < 2) {
          this.resultado = false;
        } else {
          this.resultado = true;
          for (let i = 2; i <= Math.sqrt(this.numero1); i++) {
            if (this.numero1 % i === 0) {
              this.resultado = false;
              break;
            }
          }
        }
        break;
      case 'perfecto':
        let suma = 0;
        for (let i = 1; i < this.numero1; i++) {
          if (this.numero1 % i === 0) {
            suma += i;
          }
        }
        this.resultado = suma === this.numero1;
        break;
      default:
        this.resultado = false;
        break;
    }
  }
}
