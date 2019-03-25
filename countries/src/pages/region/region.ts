import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryApiProvider } from '../../providers/country-api/country-api';

import { HomePage } from '../home/home';
import { CountryPage } from '../country/country';

/**
 * RegionPage 
 * called from HomePage, outputs a list of countrys within a selected region
 * in following format: 
 * Country flag, country name and region. Information button.
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

  //selects country and opens countryPage for this selection.
  selectCountry(country: string){ 
    this.country = country;
    this.openCountryPage();
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
      this.countries = data;
    });
  }
}
