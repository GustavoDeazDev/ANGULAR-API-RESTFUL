import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, TheComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//importando o http module
import { HttpClientModule } from '@angular/common/http';
//importando o FormsModule
import { FormsModule } from '@angular/forms';
// importando o service
import { RestApiService } from './shared/rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TheComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
