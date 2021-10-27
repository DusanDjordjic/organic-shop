import { Component } from '@angular/core';
import { ProductInterface } from './Interfaces/product.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  prodctsArray: ProductInterface[] = [];
  searchQuery: string = '';
  activeProduct: ProductInterface;
  constructor(private productService: ProductService) {
    this.prodctsArray = productService.getProducts();
    this.activeProduct = this.prodctsArray[0];
    console.log(this.activeProduct);
  }
  onSearchSubmit() {
    console.log('serach submit');
  }
  setActiveDetail(name: string) {
    this.activeProduct = this.prodctsArray.filter(
      (product) => product.name === name
    )[0];
  }
}
