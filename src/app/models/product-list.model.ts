import { Product } from './product.model';

export class ProductList {
  count: number;
  results: Product[];
  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results = [];
    if (obj && obj.results)
      for (let i = 0; i < obj.results.length; i++) {
        this.results.push(new Product(obj.results[i]));
      }
  }
}
