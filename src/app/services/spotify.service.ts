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
      'Authorization': 'Bearer BQA8tyPHshgLu2gcAEYU045F54UJ-4gqc2mDthlaeVC5wByVpqzUTTlQE-JLePSVvdXRZzMAeQMwEbYfzWo'
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

  getAlbumsArtist( id: string ) {
    return this.getQuery(`artists/${ id }/albums`)
               .pipe( map ( data => {
                 return data['items'];
               }));
  }

  getSeveralArtists(a1: string, a2: string, a3: string, a4: string) {
    return this.getQuery(`artists?ids=${a1},${a2},${a3},${a4}`)
               .pipe( map( data => {
                return data['artists'];
               }) )
  }

}
