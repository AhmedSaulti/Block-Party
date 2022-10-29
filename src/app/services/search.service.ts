import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseURL = 'https://www.berlin.de/sen/web/service/maerkte-feste/wochen-troedelmaerkte/index.php/index.geojson';
  partiesBS = new BehaviorSubject(null);
  constructor(
    private http: HttpClient
  ) { }
  
  getParties(query: string) {
    return this.http.get(this.baseURL + '?' + query);
  }
}
