import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  search( term: string ) {
    if (term.length > 0) {
      this.router.navigate( ['/search', term] )
    } else {
      this.router.navigate( ['/home'] )
    }
  }

}
