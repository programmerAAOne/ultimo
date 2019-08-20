import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';

@Injectable({
  providedIn: 'root'
})
export class ProductDatasourceService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${ PROTOCOL }://${ location.hostname }/ecommerce-project/api`;
  }

  getProducts(): any {
    return this.httpClient.get(`${ this.baseUrl }/products`);
  }

  getOrders(): any {
    return this.httpClient.get(`${ this.baseUrl }/orders`);
  }

  getOrderDetails(): any {
    return this.httpClient.get(`${ this.baseUrl }/order-details`);
  }

}
