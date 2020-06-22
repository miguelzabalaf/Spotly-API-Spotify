import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

  // CONSUMIR API
  import { HttpClientModule } from '@angular/common/http'; // Porque ocupa unas herramientas escensiales que serán usadas a lo largo del programa, Ej: La que me permite realizar peticiones
  // CONSUMIR API

import { AboutComponent } from './components/about/about.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    AboutComponent,
    CapitalizePipe,
    NoimagePipe,
    LoadingComponent
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
