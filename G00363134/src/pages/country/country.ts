import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryApiProvider } from '../../providers/country-api/country-api';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Storage } from '@ionic/storage';
import { RegionPage } from '../region/region';
import { HomePage } from '../home/home';

/**
 * Author: Eoin Wilkie
 * County Page
 */

@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  //regional block acronym's, used to determine the regional block for iab.
  regionalBlocList: string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "ASAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];

  //wikiSearch will be concatted wiki and wikis to create wikipedia link for regional block
  wiki:string = "https://en.wikipedia.org/wiki/";
  wikis:string[] = [
    "European_Union", "European_Free_Trade_Association", "Caribbean_Community", "Pacific_Alliance", "African_Union", "Union_of_South_American_Nations",
    "Eurasian_Economic_Union", "Arab_League", "Association_of_Southeast_Asian_Nations", "Central_American_Integration_System",
    "Central_European_Free_Trade_Agreement", "North_American_Free_Trade_Agreement", "South_Asian_Association_for_Regional_Cooperation"
  ];
  wikiSearch:string;

  country;
  countries:any = [];

  //constructor is passed values from calling page
  constructor(public storage: Storage, private iab: InAppBrowser, private dataService: CountryApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.country = navParams.get("country");
    //save country to localStorage
  }

  //launches wikipedia fpr IAB
  launchWiki(regionalBlock: string){
    let i = 0;
    for (let bloc of this.regionalBlocList){
      if (regionalBlock === bloc){
        this.wikiSearch = this.wiki + this.wikis[i];
        const browser = this.iab.create(this.wikiSearch);
        break;
      }
      i += 1;
    }
  }

  //formats number for display purposes: ###,###,###
  formatNumber(number: string){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

  //OnInit, calls GetCountryData
  ngOnInit(){
    this.dataService.GetCountryData(this.country).subscribe((data)=>{
    this.countries = data;
    });
  }
  ionViewWillEnter(){
    this.storage.set("PreviousSearch", this.country);
  }
}