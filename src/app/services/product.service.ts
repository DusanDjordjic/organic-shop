import { ProductInterface } from '../Interfaces/product.interface';

export class ProductService {
  productsArray: ProductInterface[] = [
    {
      name: 'Beli Čaj',
      picture: '../assets/white-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
    {
      name: 'Crni Čaj',
      picture: '../assets/black-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
    {
      name: 'Zeleni Čaj',
      picture: '../assets/green-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
    {
      name: 'Čaj od Đumbira',
      picture: '../assets/ginger-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
    {
      name: 'Čaj od Mente',
      picture: '../assets/peppermint-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
    {
      name: 'Čaj od Kamilice',
      picture: '../assets/camomile-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
    {
      name: 'Čaj od Hibiskusa',
      picture: '../assets/hibiscus-tea.png',
      price: 500,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum quia labore facilis corporis illum voluptatum cupiditate eos neque temporibus!',
    },
  ];
  getProducts() {
    return this.productsArray;
  }
}
