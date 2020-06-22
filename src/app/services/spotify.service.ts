import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-pogKTfzos0wkT3-CRuk31I8XxZz3tgCZjSxEOflH3KubKhyf9N2Blj2E5fq9XYytsmDiy77pCOVAbik'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( (data: any) => {
                      return data.albums.items;
                    }));

  }

  getArtist(term: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-pogKTfzos0wkT3-CRuk31I8XxZz3tgCZjSxEOflH3KubKhyf9N2Blj2E5fq9XYytsmDiy77pCOVAbik'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ term }&type=artist`, { headers })
                    .pipe ( map( data =>  data['artists'].items));

  }

}
