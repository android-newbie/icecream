import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IcecreamNameComponent } from './icecream-name/icecream-name.component';
import { IcecreamDetailsComponent } from './icecream-details/icecream-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IcecreamNameComponent,
    IcecreamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
