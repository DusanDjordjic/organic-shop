import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ProductInterface } from '../Interfaces/product.interface';

@Component({
  selector: 'app-product-card-big',
  templateUrl: './product-card-big.component.html',
  styleUrls: ['./product-card-big.component.scss'],
})
export class ProductCardBigComponent implements OnInit {
  @Input('product') product!: ProductInterface;
  constructor(private markdownService: MarkdownService) {}

  ngOnInit(): void {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      return `<h${level} class="desc-h${level}">${text}</h${level}>`;
    };
    this.markdownService.renderer.paragraph = (text: string) => {
      return `<p class="justify-text">${text}</p>`;
    };
  }
}
