import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../common/summoner.service';
import { ActivatedRoute } from '@angular/router';
import { DataDragonService } from '../common/data-dragon.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'summoner-profile',
  templateUrl: './summoner-profile.component.html',
  styleUrls: ['./summoner-profile.component.css']
})
export class SummonerProfileComponent implements OnInit{

  paramRegionCode: any;
  paramName : any;

  responseData: any
  profileIconUrl: any;

  rankingData: any;


  constructor(private service: SummonerService, private route: ActivatedRoute, private ddragon: DataDragonService){

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.paramName = params.get("summonerName");
      this.paramRegionCode = params.get("regionCode");

      this.service.getSummonerByName(this.paramRegionCode, this.paramName).subscribe(response => {
        this.responseData = response;
        this.ddragon.getProfileIcon(this.responseData?.profileIconId).subscribe(response => {
          this.profileIconUrl = response['resource_url']
        })
        this.service.getRankingSoloBySummonerId(this.paramRegionCode, this.responseData?.id).subscribe(response => {
          this.rankingData = response[0];
          console.log(this.rankingData)
        })
      })
    })
    
  }

  /** This is another way of doing it, using switchMap. It is a little bit slower then my method
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.paramName = params.get("summonerName");
        this.paramRegionCode = params.get("regionCode");
  
        return this.service.getSummonerByName(this.paramRegionCode, this.paramName).pipe(
          switchMap(summonerResponse => {
            this.responseData = summonerResponse;
  
            // Assuming 'profileIconId' is a property of summonerResponse
            return this.ddragon.getProfileIcon(this.responseData.profileIconId);
          })
        );
      })
    ).subscribe(profileIconResponse => {
      this.profileIconUrl = profileIconResponse['resource_url'];
    });
  }
   * 
  */




}
