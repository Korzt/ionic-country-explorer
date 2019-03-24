webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_country__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //GV
/**
 * RegionPage
 * called from HomePage, outputs a list of countrys within a selected region
 * in following format:
 *
 */
var RegionPage = /** @class */ (function () {
    function RegionPage(dataService, navCtrl, navParams) {
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.countries = [];
        this.region = navParams.get("region");
    }
    RegionPage.prototype.selectCountry = function (country) {
        this.country = country;
        this.openCountryPage(); //GV
    };
    RegionPage.prototype.openCountryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__country_country__["a" /* CountryPage */], {
            country: this.country
        });
    };
    RegionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegionPage');
    };
    RegionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.GetRegionData(this.region).subscribe(function (data) {
            _this.countries = data; //check API for this
        });
    };
    RegionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-region',template:/*ion-inline-start:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\pages\region\region.html"*/'<!--\n  Generated template for the RegionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>RegionPage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="container">\n    <ion-list *ngFor=\'let c of countries\'>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src={{c.flag}}>\n        </ion-thumbnail>\n        <div id="country_name">\n          <h2>{{c.name}}</h2>\n        </div>\n        <div id="region_name">\n          <p>{{c.subregion}}</p>\n        </div>\n        <li ion-button (click)="selectCountry(c.name)">more info</li>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\pages\region\region.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__["a" /* CountryApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegionPage);
    return RegionPage;
}());

//# sourceMappingURL=region.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/country/country.module": [
		278,
		1
	],
	"../pages/region/region.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__region_region__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_country__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NavController } from 'ionic-angular';

 //GV
 //GV
/**
 * HomePage
 * Home page of app.
 * Allows the selection of a region.
 * May include country search which directly liks to country page
 *
 */
var HomePage = /** @class */ (function () {
    function HomePage(dataService, navCtrl) {
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]; //import this data?
    }
    //previous search fucntion
    HomePage.prototype.selectPreviousSearch = function () {
        //create function 
    };
    HomePage.prototype.selectRegion = function (region) {
        this.region = region;
        this.openRegionPage(); //GV
    };
    //Next 2 methods could be handled in 1, are left as 2 incase further development requires t
    HomePage.prototype.selectCountry = function () {
        this.openCountryPage();
    };
    HomePage.prototype.openCountryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__country_country__["a" /* CountryPage */], {
            country: this.country
        });
    };
    HomePage.prototype.openRegionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__region_region__["a" /* RegionPage */], {
            region: this.region //GV
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\pages\home\home.html"*/'<!--\n\n  Author: Eoin Wilkie\n\n\n\n  HomePahe:\n\n  Entry page, displays information in the following format:\n\n  Search input - takes user search input and calls CountryPage\n\n  Select region - displays a button for each continent, displays RegionPage for \n\n                  selected continent.\n\n  Previous searches - displays users 10 previous searched pages\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!-- Entry must be exact -->  \n\n  <div id="container">\n\n    <ion-item id="rounded_input">\n\n      <ion-input placeholder="Search Country" [(ngModel)]="country" (keyup.enter)="selectCountry()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item id="rounded_previous">\n\n      <li ion-label (click)="selectPreviousSearch()"> Previous Searches </li>\n\n    </ion-item>\n\n    \n\n    <h5>Select Region:</h5>\n\n    <ion-list *ngFor=\'let region of regions\'>\n\n        <ion-item id="rounded_selection">\n\n          <li ion-label (click)="selectRegion(region)"> {{region}}</li>\n\n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__["a" /* CountryApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_region_region__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_country_country__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_country_api_country_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//must add these in order to pass arguements from one page to another






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_region_region__["a" /* RegionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_country_country__["a" /* CountryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/country/country.module#CountryPageModule', name: 'CountryPage', segment: 'country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/region/region.module#RegionPageModule', name: 'RegionPage', segment: 'region', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_region_region__["a" /* RegionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_country_country__["a" /* CountryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_country_api_country_api__["a" /* CountryApiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CountryApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CountryApiProvider = /** @class */ (function () {
    function CountryApiProvider(http) {
        this.http = http;
        console.log('Hello CountryApiProvider Provider');
    }
    CountryApiProvider.prototype.GetCountryData = function (country) {
        //return this.http.get('https://restcountries.eu/rest/v2/name/' + country);
        return this.http.get("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
        //return null;
    };
    CountryApiProvider.prototype.GetRegionData = function (region) {
        //let region: string = "Europe"; //tests show only Europe until global scope variables
        //return this.http.get('https://restcountries.eu/rest/v2/all');
        return this.http.get('https://restcountries.eu/rest/v2/region/' + region);
        //return null;
    };
    CountryApiProvider.prototype.GetAllCountriesData = function () {
        return this.http.get('https://restcountries.eu/rest/v2/all');
        //return null;
    };
    CountryApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CountryApiProvider);
    return CountryApiProvider;
}());

//# sourceMappingURL=country-api.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Author: Eoin Wilkie
 * County Page
 */
var CountryPage = /** @class */ (function () {
    //constructor is passed values from calling page
    function CountryPage(iab, dataService, navCtrl, navParams) {
        this.iab = iab;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regionalBlocList = ["EU", "EFTA", "CARICOM", "PA", "AU", "ASAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
        this.wiki = "https://en.wikipedia.org/wiki/";
        this.wikis = [
            "European_Union", "European_Free_Trade_Association", "Caribbean_Community", "Pacific_Alliance", "African_Union", "Union_of_South_American_Nations",
            "Eurasian_Economic_Union", "Arab_League", "Association_of_Southeast_Asian_Nations", "Central_American_Integration_System",
            "Central_European_Free_Trade_Agreement", "North_American_Free_Trade_Agreement", "South_Asian_Association_for_Regional_Cooperation"
        ];
        this.countries = [];
        this.country = navParams.get("country");
    }
    CountryPage.prototype.launchWiki = function (regionalBlock) {
        var i = 0;
        for (var _i = 0, _a = this.regionalBlocList; _i < _a.length; _i++) {
            var bloc = _a[_i];
            if (regionalBlock === bloc) {
                this.wikiSearch = this.wiki + this.wikis[i];
                var browser = this.iab.create(this.wikiSearch);
                break;
            }
            i += 1;
        }
    };
    //formats number for display purposes: ###,###,###
    CountryPage.prototype.formatNumber = function (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    CountryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CountryPage');
    };
    //OnInit, calls GetCountryData
    CountryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.GetCountryData(this.country).subscribe(function (data) {
            _this.countries = data;
        });
    };
    CountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-country',template:/*ion-inline-start:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\pages\country\country.html"*/'<!--\n\n  Author: Eoin Wilkie\n\n\n\n  CountryPage:\n\n  Displays individual countries information in the following format:\n\n  Country flag\n\n  Country name, capital, population, area km2\n\n  Region name, subregion\n\n  Regional blocks\n\n  Currencies\n\n  Languages\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>CountryPage</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div id="container">\n\n    <ion-list *ngFor=\'let c of countries\'>\n\n      <ion-item>\n\n\n\n        <ion-img width="200" height="150" src={{c.flag}} alt="c.name flag not loaded.">\n\n        </ion-img>\n\n\n\n        <div id="country_name">\n\n          <h1>{{c.name}}</h1>\n\n        </div>\n\n\n\n        <div id="country_details">\n\n          <p>Capital: {{c.capital}}</p>\n\n          <p>Population: {{formatNumber(c.population)}}</p>\n\n          <p>Area: {{formatNumber(c.area)}}km²</p>\n\n        </div>\n\n\n\n        <div id="region_details">\n\n          <p>Region: {{c.region}}</p>\n\n          <p>Subregion: {{c.subregion}}</p>\n\n        </div>\n\n\n\n      <div id="list_title">\n\n          <p>Regional Blocks:</p>\n\n      </div>\n\n        \n\n      <div id="list_details">\n\n        <ion-list *ngFor=\'let block of c.regionalBlocs\'>\n\n            <li ion-label (click)="launchWiki(block.acronym)">{{block.name}}</li>\n\n        </ion-list>\n\n      </div>\n\n\n\n      <div id="list_title">\n\n        <p>Currencies:</p>\n\n      </div>\n\n        \n\n      <div id="list_details">\n\n        <ion-list *ngFor=\'let currency of c.currencies\'>\n\n            <p>{{currency.name}}</p>\n\n        </ion-list>\n\n      </div>\n\n\n\n      <div id="list_title">\n\n        <p>Languages:</p>\n\n      </div>\n\n        \n\n      <div id="list_details">\n\n        <ion-list *ngFor=\'let language of c.languages\'>\n\n          <p>{{language.name}}</p>\n\n        </ion-list>\n\n      </div>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\ProgrammingWork\Y2S4Project_MobileAppDev\countries\src\pages\country\country.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__["a" /* CountryApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_country_api_country_api__["a" /* CountryApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object])
    ], CountryPage);
    return CountryPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=country.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map