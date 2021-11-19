import { Component, OnInit, ViewChild } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { map } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productsArray: Product[] = [];
  searchQuery: string = '';
  activeProduct: Product;
  @ViewChild('sidebar') sidebar!: any;

  constructor(
    private productService: ProductService,
    private markdownService: MarkdownService
  ) {
    productService
      .getProducts()
      .pipe(map((data) => data.results))
      .subscribe((data) => {
        this.productsArray = data;
      });
    this.activeProduct = this.productsArray[0];
  }
  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      return `<h${level} class="desc-h${level}">${text}</h${level}>`;
    };
    this.markdownService.renderer.paragraph = (text: string) => {
      return `<p class="justify-text">${text}</p>`;
    };
  }
  onSearchSubmit() {
    console.log('serach submit');
  }
  setActiveDetail(name: string) {
    this.activeProduct = this.productsArray.filter(
      (product) => product.name === name
    )[0];

    this.deactivateElement(this.sidebar.nativeElement);
  }
  deactivateElement(element: HTMLElement) {
    element.classList.remove('active');
  }
  toggleSidebar(element: HTMLDivElement) {
    element.classList.toggle('active');
  }
}
