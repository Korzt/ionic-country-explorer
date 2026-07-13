import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CountryApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountryApiProvider Provider');
  }

  //returns a country - used in countryPage
  GetCountryData(country: string): Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
  }
  //returns a region - used in regionPage
  GetRegionData(region: string): Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/region/' + region);
  }
  //returns all countries - unused
  GetAllCountriesData(): Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}