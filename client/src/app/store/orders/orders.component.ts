import { Component, OnInit } from '@angular/core';
import { OrdersRepositoryService } from '../../model/orders-repository.service';
import { Order } from '../../model/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public ordersPerPage = 24;
  public selectedPage = 1;

  constructor(private ordersRepositoryService: OrdersRepositoryService,
    private router: Router) { }

  ngOnInit() {
  }

  get orders(): Order[] {
    const pageIndex = (this.selectedPage - 1) * this.ordersPerPage;
    return this.ordersRepositoryService.getOrders()
      .slice(pageIndex, (pageIndex + this.ordersPerPage));
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.ordersRepositoryService.getOrders().length / this.ordersPerPage)
    ).fill(0).map((x, i) => i + 1);
  }

  changePage(newNumber: number) {
    this.selectedPage = newNumber;
  }

  orderDatails(orderNumber: number) {
    this.router.navigate(['/order-details', orderNumber]);
  }

}
