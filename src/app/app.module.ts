import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummonerSearchComponent } from './summoner-search/summoner-search.component';
import { SummonerService } from './common/summoner.service';
import { HttpClientModule } from '@angular/common/http';
import { SummonerProfileComponent } from './summoner-profile/summoner-profile.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { CommonModule } from '@angular/common';
import { DataDragonService } from './common/data-dragon.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomDropdownComponent,
    SummonerSearchComponent,
    SummonerProfileComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'summoners/:regionCode/:summonerName', component: SummonerProfileComponent},
      {path: '', component: SummonerSearchComponent},
      {path: '**', component: NotFoundComponentComponent},
    ])
  ],
  providers: [SummonerService, DataDragonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
