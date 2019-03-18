import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CountryApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountryApiProvider Provider');
  }

  GetCountryData(country: string): Observable<any>{
    //return this.http.get('https://restcountries.eu/rest/v2/name/' + country);
    return this.http.get("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
    //return null;
  }
  GetRegionData(region: string): Observable<any>{
    //let region: string = "Europe"; //tests show only Europe until global scope variables
    //return this.http.get('https://restcountries.eu/rest/v2/all');
    return this.http.get('https://restcountries.eu/rest/v2/region/' + region);
    //return null;
  }
  GetAllCountriesData(): Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/all');
    //return null;
  }
}
