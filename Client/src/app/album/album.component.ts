import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  query: string;
  title = 'first-routed-app';
  obsTrack: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {
   
  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchAlbums(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}

