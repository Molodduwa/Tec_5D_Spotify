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
  Token="Bearer BQBwATA7UFIwo1uqGQdoScNcHeqk7uiEiijensqV5BkoYSOpLD1Tv4Xx7_SKpZRhs-EfuUNuon-bdW0yK4U-_iOwTV1tZ9WinZyfpl31Cl-wFvW7Y5GbA-StNmqSp7tLz6R8HAwHBZd0knnDW9kte0V7Ap-Trlmx1CFAqTEsTNfLLxV8LaQ"
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization: this.Token
        
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
  }


  searchAlbums(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    const headers = new HttpHeaders({
      Authorization: this.Token
    
    });

    let obsAlbum = this.http.get(url, { headers });
    return obsAlbum;
  //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchArtist(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=8`;
    const headers = new HttpHeaders({
      Authorization: this.Token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio
  }
}