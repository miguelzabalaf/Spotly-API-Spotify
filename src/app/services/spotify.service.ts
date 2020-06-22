import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 

  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-pogKTfzos0wkT3-CRuk31I8XxZz3tgCZjSxEOflH3KubKhyf9N2Blj2E5fq9XYytsmDiy77pCOVAbik'
    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => {
                  return data['albums'].items
               }));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist`)
                .pipe( map( data => {
                return data['artists'].items
                }));
  }

}
