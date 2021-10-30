import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductInterface } from '../Interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss'],
})
export class SingleProductPageComponent implements OnInit {
  product!: ProductInterface;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    // console.log(this.route.params);

    this.route.params
      .pipe(
        filter((data) => {
          return data.hasOwnProperty('id');
        })
      )
      .subscribe((data) => {
        this.product = this.productsService.getSingleProduct(data['id']);
      });
  }
}
