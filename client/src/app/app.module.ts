import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './store/nav/nav.component';
import { FooterComponent } from './store/footer/footer.component';
import { CartSummaryComponent } from './store/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CartSummaryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
