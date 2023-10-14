import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    summonerName: new FormControl(""),
    region: new FormControl("EUW")
  })

  get summonerName(){
    return this.form.get("summonerName");
  }

  get region(){
    return this.form.get("region");
  }


  receiveRegionData(selectedRegion){
    this.region?.setValue(selectedRegion);
  }

  submit(){
    console.log(this.form.value);
  }



}
