import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_Vh3YOhVsvoh30lZWupIzfx-34UzC8VhwoUemU_7OSoELztoqpmrtToeWDBDIVzYjTy0aILewFrZzb2Q'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

}
