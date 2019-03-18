import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryApiProvider } from '../../providers/country-api/country-api';

import { HomePage } from '../home/home';  //GV
import { CountryPage } from '../country/country';  //GV

/**
 * RegionPage 
 * called from HomePage, outputs a list of countrys within a selected region
 * in following format: 
 * 
 */

@IonicPage()
@Component({
  selector: 'page-region',
  templateUrl: 'region.html',
})
export class RegionPage {
  region: string;
  country: string;
  countries:any = [];

  constructor(private dataService: CountryApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.region = navParams.get("region");
  }

  selectCountry(country: string){ 
    this.country = country;
    this.openCountryPage(); //GV
  }

  openCountryPage(){
    this.navCtrl.push(CountryPage, {
    country: this.country });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionPage');
  }
  
  ngOnInit(){
    this.dataService.GetRegionData(this.region).subscribe((data)=>{
      this.countries = data;  //check API for this
    });
  }
}
