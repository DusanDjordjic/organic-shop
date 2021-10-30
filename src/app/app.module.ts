import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/product.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { markedOptionsFactory } from './markdown/markedOptionsFactory';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ProductCardBigComponent } from './product-card-big/product-card-big.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    ProductCardComponent,
    HomeComponent,
    ProductsPageComponent,
    SingleProductPageComponent,
    FooterComponent,
    NavComponent,
    ProductCardBigComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [ProductService, MarkdownService],
  bootstrap: [AppComponent],
})
export class AppModule {}
