import { Component, OnInit } from '@angular/core';
import { ExchangeRatesResponse } from '../services/payloads/exchange-rates-response';
import { CurrencyExchangeService } from '../services/exchange-rates.service';



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'CAD';
  to = 'USD';
  rates!: { [key: string]: number; };

  convert(): number{
    return this.amount * this.rates[this.to];
  }

  getAllCurrencies(): string[]{

    return Object.keys(this.rates)
  }

  loadRates() {
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates);
  }

  constructor(private service: CurrencyExchangeService) {   
  }

  ngOnInit(): void {

    this.loadRates();
  }

}
