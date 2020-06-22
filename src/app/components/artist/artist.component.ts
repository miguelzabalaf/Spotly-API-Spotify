import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistId: string;
  artist: any;
  artistsRelated: any;

  constructor( private activatedRoute: ActivatedRoute, 
               private spotify: SpotifyService,
               private router: Router ) { 


                this.activatedRoute.params.subscribe( params => {
                  this.artistId = params['id'];
                  this.getArtist( params['id'] );
                  this.getArtistsRelated( params['id'] );
                });
   }

  ngOnInit(): void {
  }

  getArtist( id: string ) {
    this.spotify.getArtist(id)
                .subscribe( (data:any) => {
                  this.artist = data
                });
  }

  getArtistsRelated( id: string ) {
    this.spotify.getRelatedArtists(id)
                .subscribe( (data: any) => {
                    this.artistsRelated = data;
                } )
  }

  showArtistRelated( id: string ) {
    this.router.navigate( ['/artist', id] );
  }

}
