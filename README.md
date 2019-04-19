# Y2S4Project_MobileAppDev

This app uses RESTCountries API to display information about countries. The purpose of the app is to display a range of information about individual countries available from RESTCountries API.  Users may search for countries by region or by inputting the countries name.
RESTCountries API can be found here: https://restcountries.eu/
The application consists of 3 ionic pages, Home, Region and Country, it also uses a HTML provider to retrieve a json string from the web.

The Home page is the first page displayed to the user, it contains a text input field which allows the user to search by country, this will call GetCountryData() from the HTML provider which will push the country page of a country matching the users search and display the information of the country.  This search must match exactly as the country name entered is appended to the end of a string and used in a Get() request.
The next function of the Home page is the Previous Search button, which will push the country page with the previous searched country. The name of the previously searched country is saved to localStorage when the page is loaded.
And lastly the user will be able to search by regions, Africa, Americas, Asia, Europe and Oceania.  Searching by Region will push the region page with GetRegionData() from the HTML provider, appending the the name of the region to the end of the HTML get() request.

The Region Page displays a list of countries in the following format:
Country flag as a thumbnail, country name, sub region within region (For eg, “Northern Europe”) and a [more info] button, used to display the Country Page of the selected country. The Region Page displays every country within the selected region and serves to allow the user to search through the list of available countries.

The Country Page displays the countries information, it is called from the HTML provider in a few days, as mentioned previously, it can be called from inserting a countries name to the text input on the Home page, it can also be selected by the Region Page. 
The country flag often does not display the first time a country is selected.
The country Page makes use of the in-app-browser to display more information on economic blocs the country is a part of. These region blocs are displayed as blue and underlined and when clicked will open a separate browser with a Wikipedia page of the bloc.
