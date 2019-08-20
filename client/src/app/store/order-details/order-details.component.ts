import { Component, OnInit } from '@angular/core';
import { OrdersRepositoryService } from '../../model/orders-repository.service';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderDetails } from '../../model/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  private orderNumber: number;

  constructor(private ordersRepositoryService: OrdersRepositoryService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
        return this.orderNumber = params['orderNumber'];
      });
  }

  ngOnInit() {
  }

  get order(): Order {
    return this.ordersRepositoryService.getOrderById(this.orderNumber);
  }

  get orderDetails(): OrderDetails[] {
    return this.ordersRepositoryService.getOrderDetails(this.orderNumber);
  }

}
