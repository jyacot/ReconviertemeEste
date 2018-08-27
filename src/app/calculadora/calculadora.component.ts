import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  baseCalculo: number;
  currencyType: string; // S: Soberano, F: Fuerte;
  reconvertion_image: string;
  prefix: string;
  IMAGE_BSS: string;
  IMAGE_BSF: string;
  constructor() {
    this.IMAGE_BSF = 'assets/FtoS.png';
    this.IMAGE_BSS = 'assets/StoF.png';
    this.currencyType = 'S';
    this.reconvertion_image = this.IMAGE_BSS;
    this.prefix = 'Bs.S';


  }
  ngOnInit() {
  }
  reset() {
    this.baseCalculo = undefined;
  }
  switchReconvertion() {
    if (this.currencyType === 'S') {
      this.currencyType = 'F';
      this.reconvertion_image = this.IMAGE_BSF;
      this.prefix = 'Bs.F';
    } else {
      this.currencyType = 'S';
      this.reconvertion_image = this.IMAGE_BSS;
      this.prefix = 'Bs.S';
    }
  }
}
