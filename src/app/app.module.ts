import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { HttpClientModule }    from '@angular/common/http';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class AppModule { }
