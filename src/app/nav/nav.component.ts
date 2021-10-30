import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('links') links!: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      this.links.nativeElement.classList.remove('active');
    });
  }
  toggleNav() {
    this.links.nativeElement.classList.toggle('active');
  }
}
