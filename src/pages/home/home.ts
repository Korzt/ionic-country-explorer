import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { CountryApiProvider } from '../../providers/country-api/country-api';
import { RegionPage } from '../region/region';
import { CountryPage } from '../country/country';

//ionic serve -c --no-proxy

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
  //list of regions - used if region is selected
  regions:string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  region: string;
  //used if country is searched for
  country: string;

  constructor(public storage: Storage, private dataService: CountryApiProvider,public navCtrl: NavController) {

  }
  //previous search fucntion
  selectPreviousSearch(){
   //create function
    this.storage.get("PreviousSearch").then((data) =>{
      if(data == null){
        console.log("No previous search in storage.");
      }
      else{
        this.country = data;
        this.openCountryPage();
      }
    }).catch((err) =>{
      console.log("Error = " + err);
    })

  }
  //Next 2 methods could be handled in 1, are left as 2 incase further development requires t
  selectCountry(){
    this.openCountryPage();
  }
  openCountryPage(){
    this.navCtrl.push(CountryPage, {
    country: this.country });
  }
  
  selectRegion(region: string){ 
    this.region = region;
    this.openRegionPage();
  }
  openRegionPage(){
    this.navCtrl.push(RegionPage, {
      region: this.region 
    });
  }
}