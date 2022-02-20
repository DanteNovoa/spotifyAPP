import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RAPARTISTAS, RAPARTISTAS2, RAPARTISTAS3, RAPARTISTAS4, RAPARTISTAS5, RAPARTISTAS6, RAPARTISTAS7 } from "src/app/ARTISTAS";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  newdict: any = {};
  oldarray: any = {};
  num: any = 0;

  constructor(private http: HttpClient) { 
  }
  
  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC0muRVo_RkzpzT1W9-Lzd5Bb0V2sxm6BAQIu4Dvh3vGrskWt-gLqYtGIuneedE-Lz3vL6RG0YOb976OlE'
      });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    let query = 'browse/new-releases?limit=20';
    let response = this.getQuery(query)
    .pipe(map( (response: any) => response["albums"].items ));
    return response;
  }

  primerGrupo() {
    const artistas = RAPARTISTAS7;
    for (let item of artistas) {
      this.getArtista(item.id)
      .subscribe((data:any) => {
        this.newdict[data.name] = data.followers.total;
        console.log(JSON.stringify(this.newdict))
      })
    }
  }

  getArtistas( termino: string) {
    const query = `search?q=${termino}&type=artist&limit=40`;
    let response = this.getQuery(query)
    .pipe(map( (response: any) => response["artists"].items));
    return response;
  }

  getArtista( id: string) {
    const query = `artists/${id}`
    let response = this.getQuery(query);
    return response;
  } 

  getTopTracks( id: string) {
    const query = `artists/${id}/top-tracks?country=mx`;

    return this.getQuery(query)
          .pipe(map( (response:any) => response['tracks']));
  }

}
