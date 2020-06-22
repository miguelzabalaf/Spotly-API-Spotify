import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 

  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBtJ3anYWjhCIV-h1ZU5ze0553Uw1Ll7Vnh7uHMeNQ_W4NJyIq_SMSbwCpmDyByLO3_lRWzURvtN1kcnbs'
    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => {
                  return data['albums'].items
               }));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
                .pipe( map( data => {
                return data['artists'].items
                }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getRelatedArtists( id: string ) {
    return this.getQuery(`artists/${ id }/related-artists`)
               .pipe ( map( data => {
                  return data['artists'];
               }));
  }

}
