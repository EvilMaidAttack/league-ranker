import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummonerSearchComponent } from './summoner-search/summoner-search.component';
import { SummonerService } from './common/summoner.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomDropdownComponent,
    SummonerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SummonerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
