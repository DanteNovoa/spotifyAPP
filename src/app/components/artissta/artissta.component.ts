import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artissta',
  templateUrl: './artissta.component.html',
  styleUrls: ['./artissta.component.css']
})
export class ArtisstaComponent{
  
  artista: any = {};
  topTracks: any = {};
  loadingArtist: boolean = false;

  constructor(private router:ActivatedRoute,
              private spotify: SpotifyService) {

    this.loadingArtist = true;

    this.router.params.subscribe(params => {
      this.getArtistaFromSpotify(params["id"]);
      this.getTopTracks(params["id"]);
    })

   }

   getArtistaFromSpotify( id: string) {
    
    this.loadingArtist = true;

    this.spotify.getArtista( id )
        .subscribe(artista => {
        console.log(artista, "este es el artista")
        this.artista = artista;
        this.loadingArtist = false;
        })
   }

   getTopTracks( id: string){
    this.spotify.getTopTracks(id)
        .subscribe(topTracks => {
          console.log(topTracks, "linea 41")
          this.topTracks = topTracks;
        })
   }

}
