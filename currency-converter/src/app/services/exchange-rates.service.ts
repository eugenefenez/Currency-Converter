import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) { }

  getRates(base: string){
    return this.httpClient.get('https://api.exchangeratesapi.io/latest?base=${base}');
  }
}
