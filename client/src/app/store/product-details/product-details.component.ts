import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { Product } from 'src/app/model/product';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productCode: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public cart: Cart,
    private productsRespositoryService: ProductRepositoryService) {
    }
    
    ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        return this.productCode = params['productCode'];
      });
    }

  get product(): Product {
    return this.productsRespositoryService.getProductById(this.productCode);
  }

  addCart = () => this.cart.addLine(this.product);

}
