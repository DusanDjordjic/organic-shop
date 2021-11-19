import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ProductInterface } from '../Interfaces/product.interface';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card-big',
  templateUrl: './product-card-big.component.html',
  styleUrls: ['./product-card-big.component.scss'],
})
export class ProductCardBigComponent implements OnInit {
  @Input('product') product: Product = new Product();
  count: number = 1;

  constructor(
    private markdownService: MarkdownService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      return `<h${level} class="desc-h${level}">${text}</h${level}>`;
    };
    this.markdownService.renderer.paragraph = (text: string) => {
      return `<p class="justify-text">${text}</p>`;
    };
  }
  changeCount(step: number) {
    if (this.count + step >= 1) {
      this.count += step;
    }
  }
  onAddToCart() {
    this.cartService.addToCard(this.count, this.product);
    alert(`Dodano ${this.count} ${this.product.name}`);
    this.count = 1;
  }
}
