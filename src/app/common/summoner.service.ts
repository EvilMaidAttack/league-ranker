import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private http: HttpClient) { }

  getSummonerByName(regionCode, summonerName){
    let requestUrl = `http://127.0.0.1:8000/riot/summoners/${regionCode}/${summonerName}/`;
    return this.http.get(requestUrl);
  }

  getRankingSoloBySummonerId(regionCode, summonerId){
    let requestUrl = `http://127.0.0.1:8000/riot/ranking/solo/${regionCode}/${summonerId}/`;
    return this.http.get(requestUrl);
  }

}
