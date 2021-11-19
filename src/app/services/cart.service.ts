import { Subject } from 'rxjs';

export class CartService {
  countSubject = new Subject<number>();
  count: number = 0;
  cart: Array<{ count: number; productId: string }> = [];

  addToCard(count: number, id: string) {
    let notInCart = true;
    for (let i = 0; i < this.cart.length; i++) {
      const cartItem = this.cart[i];
      if (cartItem.productId === id) {
        notInCart = false;
        cartItem.count += count;
        this.count += count;
      }
    }
    if (notInCart) {
      this.cart.push({ count: count, productId: id });
      this.count += count;
    }

    this.countSubject.next(this.count);
  }
}
