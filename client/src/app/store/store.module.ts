import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { Cart } from '../model/cart';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StoreComponent
  ],
  providers: [
    Cart
  ]
})
export class StoreModule { }
