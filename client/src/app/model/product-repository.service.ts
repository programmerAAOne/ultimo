import { Injectable } from '@angular/core';
import { ProductDatasourceService } from './product-datasource.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  private products: Product[] = [];
  private categories: string[] = [];
  private scales: string[] = [];
  private vendors: string[] = [];

  constructor(private dataSourceService: ProductDatasourceService) {
    this.dataSourceService.getProducts()
      .subscribe((response: any) =>{
        this.products = response['products']
        this.categories = response['products']
          .map((product: Product) => product.productLine)
          .filter((c, index, array) => array.indexOf(c) === index)
          .sort();
        this.scales = response['products']
          .map((product: Product) => product.productScale)
          .filter((c, index, array) => array.indexOf(c) === index)
          .sort();
        this.vendors = response['products']
          .map((product: Product) => product.productVendor)
          .filter((c, index, array) => array.indexOf(c) === index)
          .sort();
      });
  }

  getProducts(productLine: string = null, productVendor: string = null, productScale: string = null): Product[] {
    return this.products
      .filter((product: Product) => {
        return ((productLine == null || product.productLine === productLine) &&
        (productVendor == null || product.productVendor === productVendor) &&
        (productScale == null || product.productScale === productScale))
      });
  }

  getCategories = (): string[] => this.categories;

  getScales = ():string[] => this.scales;

  getVendors = ():string[] => this.vendors;

  getProductById(productCode: string) { 
    let productSelected: Product;
    this.products.filter((product: Product) => {
      if (product.productCode == productCode) {
        productSelected = product;
      }
    });
    return productSelected;
  };

}
