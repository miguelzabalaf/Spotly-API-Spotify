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

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private spotify: SpotifyService ) {

              this.activatedRoute.params.subscribe( params => {
                this.term = params['term']

                this.spotify.getArtist(this.term).subscribe( (data:any) => {
                  console.log(data);
                  this.termsFounds = data
                });
              });
                
   }

  ngOnInit(): void {
  }

}
