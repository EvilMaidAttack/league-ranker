import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private http: HttpClient) { }

  getSummonerByName(regionCode, summonerName){
    let requestUrl = `https://${regionCode}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
    console.log(requestUrl);
    
    let  headers = new HttpHeaders({
      'x-riot-token': API_KEY,
      'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'allowedHeaders': 'Content-Type, Authorization, X-Riot-Token',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-riot-token'
    });

    return this.http.get(requestUrl, { headers });

  }

}
