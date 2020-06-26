import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Me
  developer = 'Miguel Zabala Figueroa';
  thisYear = new Date().getFullYear();

  newReleases: any[] = [];
  featuredArtists: any
  loading: boolean;
  // Artists
  a1 = '4q3ewBCX7sLwd24euuV69X';
  a2 = '5YGY8feqx7naU7z4HrwZM6';
  a3 = '1vCWHaC5f2uS3yhpwWbIA6';
  a4 = '6XyY86QOPPrYVGvF9ch6wz';

  constructor( private spotify: SpotifyService,
               private router: Router ) { 

    this.loading = true;

    this.spotify.getNewReleases()
                .subscribe( ( data: any ) => {
                  this.newReleases = data;
                  this.loading = false;
                });

    this.spotify.getSeveralArtists(this.a1, this.a2, this.a3, this.a4)
                .subscribe( (data: any) => {
                  this.featuredArtists = data;
                } )

   }

  ngOnInit(): void {
  }

  showArtist(id) {
    this.router.navigate( ['artist', id] )
  }

}
