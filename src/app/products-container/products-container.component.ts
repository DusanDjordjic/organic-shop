import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  productsArray: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(map((data) => data.results))
      .subscribe((data) => {
        this.productsArray = data;
      });
  }
}
