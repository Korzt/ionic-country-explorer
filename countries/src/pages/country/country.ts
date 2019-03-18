import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryApiProvider } from '../../providers/country-api/country-api';

import { RegionPage } from '../region/region';  //GV
import { HomePage } from '../home/home';  //GV

/**
 * CountryPage
 * called from Region page, details information about country from https://restcountries.eu/ API
 * in following format: 
 * 
 */

@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  country;
  countries:any = [];

  constructor(private dataService: CountryApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.country = navParams.get("country");
  }

  formatNumber(number: string){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

  ngOnInit(){
    this.dataService.GetCountryData(this.country).subscribe((data)=>{
    this.countries = data;  //check API for this
    });
  }
}
