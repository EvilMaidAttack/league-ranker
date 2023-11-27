import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDragonService {

  constructor(private http: HttpClient) { }

  getProfileIcon(profileIconId){
    let url = `http://127.0.0.1:8000/riot/images/profile-icons/${profileIconId}`;
    return this.http.get(url);
  }

}
