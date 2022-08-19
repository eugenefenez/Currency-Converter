import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'CAD';
  to = 'USD';
  rates = 0.74;

  convert(): number{
    return this.amount * this.rates;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
