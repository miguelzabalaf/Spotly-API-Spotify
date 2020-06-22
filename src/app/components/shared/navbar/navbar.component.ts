import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  termsFounds: any[] = [];

  constructor( private router: Router,
              private spotify: SpotifyService ) { }

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
