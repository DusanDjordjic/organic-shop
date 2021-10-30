import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../Interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products: ProductInterface[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
