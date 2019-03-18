import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
//import { NavController } from 'ionic-angular';
import { CountryApiProvider } from '../../providers/country-api/country-api';
import { RegionPage } from '../region/region';  //GV
import { CountryPage } from '../country/country';  //GV


/**
 * HomePage 
 * Home page of app.
 * Allows the selection of a region.
 * May include country search which directly liks to country page 
 * 
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  regions:string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]; //import this data?
  region: string;
  country: string = "Ireland";
  countriesAll: string[];
  countries: string[];
  keyword: string;

  constructor(private dataService: CountryApiProvider,public navCtrl: NavController) {

  }
  selectRegion(region: string){ 
    this.region = region;
    this.openRegionPage(); //GV
  }
  //Next 2 methods could be handled in 1, are left as 2 incase further development requires t
  selectCountry(){
    this.openCountryPage();
  }
  openCountryPage(){
    this.navCtrl.push(CountryPage, {
    country: this.country });
  }
  
  openRegionPage(){
    this.navCtrl.push(RegionPage, {
      region: this.region //GV
    });
  }

  /*ngOnInit(){
    //this may not be used.
    this.dataService.GetAllCountriesData().subscribe((data)=>{
      this.countries = data;  //check API for this
    });
  }*/
}
