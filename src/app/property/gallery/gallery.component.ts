import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
foto={
  src:"assets/img/lago.jpg",
  alt:"Lago del cuore",
  caption: "Lago nel cuore del Lazio"
};
  constructor() { }

  ngOnInit(): void {
  }

}
