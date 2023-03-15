import { Component } from '@angular/core';

import { FetchphotosService } from '../fetchphotos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  photoUrl ="";

  constructor(private photoService: FetchphotosService) {
    photoService.fetchRandomPhotos().subscribe((value)=>{
      this.photoUrl = value.urls.regular;
    })
  }

  generatePhoto(){
    this.photoService.fetchRandomPhotos().subscribe((value)=>{
      this.photoUrl = value.urls.regular;
    })
  }

}
