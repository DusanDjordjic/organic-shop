import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('links') links!: any;
  cartCount: number = 0;
  constructor(private router: Router, private cart: CartService) {}

  ngOnInit(): void {
    this.cart.countSubject.subscribe((data) => (this.cartCount = data));
  }
  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      this.links.nativeElement.classList.remove('active');
    });
  }
  toggleNav() {
    this.links.nativeElement.classList.toggle('active');
  }
}
