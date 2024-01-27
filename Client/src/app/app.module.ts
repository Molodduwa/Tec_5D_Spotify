import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyService } from './spotify.service';
import { HomeComponent } from './home/home.component';
import { ArtistiComponent } from './artisti/artisti.component';
import { AlbumComponent } from './album/album.component';
import { BraniComponent } from './brani/brani.component';
import { PlayBComponent } from './play-b/play-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistiComponent,
    AlbumComponent,
    BraniComponent,
    PlayBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
