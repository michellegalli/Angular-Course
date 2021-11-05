import { Injectable } from '@angular/core';
import { album } from '../data/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() {}
  getAlbum(){
    return album
  }
}
