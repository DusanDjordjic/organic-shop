import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../Interfaces/product.interface';
import { ProductList } from '../models/product-list.model';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:3000/api/products';

@Injectable()
export class ProductService {
  productsArray: ProductList = new ProductList();
  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductList> {
    return this.http
      .get<{ count: number; results: [] }>(baseUrl)
      .pipe(map((response) => new ProductList(response)));
  }
  getSingleProduct(id: string): Observable<Product> {
    return this.http
      .get<{ product: any }>(baseUrl + '/' + id)
      .pipe(map((data) => new Product(data.product)));
  }
}
