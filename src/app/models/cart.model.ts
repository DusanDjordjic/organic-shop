import { CartItem } from './cart-item.model';
import { Product } from './product.model';

export class Cart {
  private _count: number = 0;
  private _items: Array<CartItem> = [];
  constructor(items?: Array<CartItem>) {
    if (items) {
      this._items = items;
      items.forEach((item) => (this._count += item.count));
    }
  }
  get count(): number {
    return this._count;
  }
  get length(): number {
    return this._items.length;
  }
  getItemById(id: string): CartItem {
    return this._items.filter((item) => item.item.id === id)[0];
  }
  getItemByIndex(index: number): CartItem {
    return this._items[index] || new CartItem();
  }
  addToCart(newCount: number = 0, newItem: Product) {
    if (!newItem || newCount <= 0) return;
    // > Proveri da li vec postoji item sa tim proizvodom
    // > Ako postoji samo povecaj count
    let itemExists = false;
    for (let i = 0; i < this._items.length; i++) {
      if (newItem.id === this._items[i].item.id) {
        itemExists = true;
        this._items[i].count += newCount;
      }
    }
    // > Ako ne postoji dodaj ga
    if (!itemExists) {
      this._items.push({ count: newCount, item: newItem });
    }
    this._count += newCount;
  }
}
