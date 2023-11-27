import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SummonerService } from '../common/summoner.service';

@Component({
  selector: 'summoner-search',
  templateUrl: './summoner-search.component.html',
  styleUrls: ['./summoner-search.component.css']
})
export class SummonerSearchComponent {
  form = new FormGroup({
    summonerName: new FormControl(""),
    region: new FormControl("")
  })

  constructor(private service: SummonerService){

  }

  get summonerName(){
    return this.form.get("summonerName");
  }

  get region(){
    return this.form.get("region");
  }


  receiveRegionData(selectedRegion){
    this.region?.setValue(selectedRegion);
  }

  preventFocusAndSubmit(event){
    event.preventDefault();
  }



}
