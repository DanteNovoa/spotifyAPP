import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{

  @Input() items: any[] = [];
  
  constructor( private router: Router) { }

  verArtista( item: any) {

    let artistaId;

    (item.type === 'artist') ? artistaId = item.id 
    : artistaId = item.artists[0].id

    this.router.navigate(['/artist', artistaId])

  }

}
