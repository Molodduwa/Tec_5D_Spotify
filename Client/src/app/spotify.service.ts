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

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQByev9VvC1op5xF6r_QC3q7isoEUYlSH6IZijut0zq6_CUkZkKA-5o8--Wn-nhHuoxxdc2ygU7zZb0mdGaJqNM1Zg_GAY7Y5eWVL47Vo13qe3N4q9i4XaCyqf7OIYi01PsI2QfIsiF_1sXPU6w6s-Tv0WS9lgpDNy1AowIeQJ_333v6cYM&'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
  }
}
