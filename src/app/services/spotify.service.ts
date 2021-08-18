import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("SpotifyService listo")
  }

  getNewReleases() {

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCUzDcT5J7VU9_MPGcDluOdUq3Sd0PvkMlmNY12PTCfkt_bC96goV8AVtkLS4rWCAIGmum7RYkQKiKE6CQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
            .pipe ( map( (response: any) => response["albums"].items ));
  }

  getArtista( termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCUzDcT5J7VU9_MPGcDluOdUq3Sd0PvkMlmNY12PTCfkt_bC96goV8AVtkLS4rWCAIGmum7RYkQKiKE6CQ'
      });
  
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=12`, {headers})
          .pipe ( map( (response: any) => response['artists'].items ));

  }
}
