import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss'],
})
export class SingleProductPageComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter((data) => {
          return data.hasOwnProperty('id');
        })
      )
      .subscribe((data) => {
        this.productsService
          .getSingleProduct(data['id'])
          .subscribe((product) => {
            this.product = product;
          });
      });
  }
}
