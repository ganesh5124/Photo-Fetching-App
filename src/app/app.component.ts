import { Component } from '@angular/core';
import { FetchphotosService } from './fetchphotos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private photoService:FetchphotosService ){}
  
}
