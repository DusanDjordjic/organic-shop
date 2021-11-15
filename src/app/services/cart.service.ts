import { Subject } from 'rxjs';

export class CartSerice {
  countSubject = new Subject<number>();
  cart: Array<{ count: number; productId: string }> = [];
  addToCard(count: number, id: string) {
    let notInCart = true;
    for (let i = 0; i < this.cart.length; i++) {
      const cartItem = this.cart[i];
      if (cartItem.productId === id) {
        notInCart = false;
        cartItem.count += count;
      }
    }
    if (notInCart) {
      this.cart.push({ count: count, productId: id });
    }
    console.log(this.cart);
  }
}
