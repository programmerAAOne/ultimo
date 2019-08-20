import { Injectable } from '@angular/core';
import { ProductDatasourceService } from './product-datasource.service';
import { Order, OrderDetails } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrdersRepositoryService {

  public orders: Order[] = [];
  public orderDetails: OrderDetails[] = [];
  public totalPrice: number;

  constructor(private dataSourceService: ProductDatasourceService) {
    this.dataSourceService.getOrders()
      .subscribe((response: any) => {
        this.orders = response['orders'];
      });
   this.dataSourceService.getOrderDetails()
    .subscribe((response: any) => {
      this.orderDetails =  response['orderDetails'];
    });
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(orderNumber: number) { 
    let orderSelected: Order;
    this.orders.filter((order: Order) => {
      if (order.orderNumber == orderNumber) {
        orderSelected = order;
      }
    });
    return orderSelected;
  };

  getOrderDetails(orderNumber: number): OrderDetails[] {
    return this.orderDetails.filter((orderDetail: OrderDetails) => {
      return orderDetail.orderNumber == orderNumber;
    }) 
  }

}
