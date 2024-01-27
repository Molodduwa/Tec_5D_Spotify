import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { BraniComponent } from './brani/brani.component';
import { ArtistiComponent } from './artisti/artisti.component';
import { PlayBComponent } from './play-b/play-b.component';

const routes: Routes = [
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: 'Artisti', component: ArtistiComponent}, 
{ path: 'Album', component: AlbumComponent}, 
{ path: 'Brani', component: BraniComponent}, 
{ path: 'PlayB', component: PlayBComponent}, 
{ path: 'Home', component:HomeComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
