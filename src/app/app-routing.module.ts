import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  { path: 'products/:id', component: SingleProductPageComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
