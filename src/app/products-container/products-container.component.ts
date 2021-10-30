import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../Interfaces/product.interface';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  productsArray: ProductInterface[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productsArray = this.productService.getProducts();
  }
}
