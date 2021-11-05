import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-gestione-album',
  templateUrl: './gestione-album.component.html',
  styleUrls: ['./gestione-album.component.css']
})
export class GestioneAlbumComponent implements OnInit {
albums: Album[];
mostrare: boolean= true;
orderUserIdAsc:boolean;
  constructor(private as: AlbumService) { 
    this.albums=[];
    this.orderUserIdAsc=true
  }

  ngOnInit(): void {
    this.albums= this.as.getAlbum();
  }
mostra(){
  this.mostrare=!this.mostrare
}
sortAlbumByUserId(){
  if(this.orderUserIdAsc){
  this.albums.sort(
    (a,b)=> a.userId - b.userId
  );}
 else {this.albums.sort(
(a,b)=> b.userId - a.userId);
 }
this.orderUserIdAsc= !this.orderUserIdAsc
}
}
