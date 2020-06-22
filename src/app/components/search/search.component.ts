import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  term: string;
  termsFounds: any;
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private spotify: SpotifyService ) {

                this.loading = false;
                
                this.activatedRoute.params.subscribe( params => {
                  this.term = params['term']
                  
                  this.spotify.getArtists(this.term).subscribe( (data:any) => {
                    console.log(data);
                    this.termsFounds = data
                    this.loading = false;
                });
              });
                
   }

  ngOnInit(): void {
  }

  showArtist(id: string) {
    this.router.navigate( ['/artist', id] );
  }

}
