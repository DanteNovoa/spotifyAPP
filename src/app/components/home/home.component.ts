import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  serviceMessageError: string = "";

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe( (data: any) =>{
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones, "linea 21")
      this.loading = false;
    }, (serviceError) =>{
      this.error = true;
      this.loading = false;
      this.serviceMessageError = serviceError.error.error.message;
    })
   }

  ngOnInit(): void {
  }

}
