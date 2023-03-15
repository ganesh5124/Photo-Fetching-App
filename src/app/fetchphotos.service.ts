import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

interface unsplashResponse{
    urls: {
      regular :string;
    }
}

@Injectable({
  providedIn: 'root',
})
export class FetchphotosService {
  constructor(private http: HttpClient) {}

  fetchRandomPhotos() {
    return this.http.get<unsplashResponse>(
      'https://api.unsplash.com/photos/random/?client_id=jb9N226SgGr9KoFAtzbkRenI4qAqALIKW1N5RLvXS0E',
      {
        headers: {
          Authorization:
            'Client-ID jb9N226SgGr9KoFAtzbkRenI4qAqALIKW1N5RLvXS0E',
        },
      }
    )
}
}
