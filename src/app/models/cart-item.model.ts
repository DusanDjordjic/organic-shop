import { Product } from './product.model';

export class CartItem {
  count: number;
  item: Product;
  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.item = (obj && obj.item) || new Product();
  }
}
