import { Component, OnInit, ViewChild } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ProductInterface } from '../Interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prodctsArray: ProductInterface[] = [];
  searchQuery: string = '';
  activeProduct: ProductInterface;
  @ViewChild('sidebar') sidebar!: any;

  constructor(
    private productService: ProductService,
    private markdownService: MarkdownService
  ) {
    this.prodctsArray = productService.getProducts();
    this.activeProduct = this.prodctsArray[0];
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
    this.activeProduct = this.prodctsArray.filter(
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
