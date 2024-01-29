import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {


  
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }
  Token="Bearer BQD0vingu_-Y2MLPgw9hw_ihI-uLi6KCV6vgpTVegRnuEy-mPw5FgAHP7nw7BnjlhRfbDhuOUFKb-LLeeyhCrK8LBx5SMawuTwecn6t_VNYUlcBuRFvOK2DQgR7b27p-_Ci0FxOSKUhi7e4qRiMGFbYNjBWXEF3gtCuF7T2Rqi9socWWCxI"
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=18`;
    const headers = new HttpHeaders({
      Authorization: this.Token
        
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
  }


  searchAlbums(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album&limit=18`;
    const headers = new HttpHeaders({
      Authorization: this.Token
    
    });

    let obsAlbum = this.http.get(url, { headers });
    return obsAlbum;
  //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchArtist(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=9`;
    const headers = new HttpHeaders({
      Authorization: this.Token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio
  }
}