import { Subject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

export class CartService {
  countSubject = new Subject<number>();
  count: number = 0;
  cart: Cart = new Cart();
  constructor() {
    console.log(this.cart);
  }
  addToCard(count: number, itemToAdd: Product) {
    this.cart.addToCart(count, itemToAdd);
    this.countSubject.next(this.cart.count);
    console.log(this.cart);
  }
}
