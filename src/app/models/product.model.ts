export class Product {
  id: string;
  name: string;
  picture: string;
  price: number;
  text: string;
  desc: string;
  constructor(obj?: any) {
    this.id = (obj && obj._id) || null;
    this.name = (obj && obj.name) || '';
    this.picture = (obj && obj.picture) || '';
    this.price = (obj && obj.price) || 0;
    this.text = (obj && obj.text) || '';
    this.desc = (obj && obj.desc) || '';
  }
}
