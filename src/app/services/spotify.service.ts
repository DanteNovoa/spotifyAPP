import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
  }
  
  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_Xv-0GN-MFZCe-30q03N6QzTd5V07OhNTgYfJrBnKsL__i_C7vencCscDOn4A52GVUx0cKHgizNFrqwU'
      });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    let query = 'browse/new-releases?limit=20';
    let response = this.getQuery(query)
    .pipe(map( (response: any) => response["albums"].items ));
    return response;
  }

  getArtistas( termino: string) {
    const query = `search?q=${termino}&type=artist&limit=12`;
    let response = this.getQuery(query)
    .pipe(map( (response: any) => response["artists"].items));
    return response;
  }

  getArtista( id: string) {
    const query = `artists/${id}`
    let response = this.getQuery(query);
    return response;
  }

  getTopTracks ( id: string) {
    const query = `artists/${id}/top-tracks?country=mx`;

    return this.getQuery(query)
          .pipe(map( (response:any) => response['tracks']));
  }

}
