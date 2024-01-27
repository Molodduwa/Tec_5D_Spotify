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
  Token="Bearer BQA3dnXfj7X5-1ZjqpGRlbe45rz7khZWIxtHxYi_thm3FBHZjmNVD3yCGDCmYXAEikkP10pamt8kBo-iNZIvzBbzE3rATBF5zVMe0BrbAZVdAl8dALLM5MmON1BqVueUg1nq959IaV19WCLFXLVvmVPJe9-OiSQrJXXD-ks0F0CvKirkEfQ"
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