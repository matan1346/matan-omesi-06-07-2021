import { BehaviorSubject, Observable } from "rxjs";
import { count, filter } from "rxjs/operators";
import { CityGroup, CityResult, LocalizedID } from "../models/city.result.model";
import { ConditionsResult } from "../models/conditions.model";
import { WeeklyForecast } from "../models/daily.forecast.model";
import { Weather, WeatherType } from "../models/weather.model";

export abstract class WeatherContract{
  WEATHER_DAYS = ['Sun','Mon','Tue','Wed','Thu'];

  unitDisplay: BehaviorSubject<WeatherType> = new BehaviorSubject<WeatherType>('C');
  protected cityAutoCompleteResults = new BehaviorSubject<CityGroup[]>([]);
  protected baseURL = 'https://dataservice.accuweather.com/';
  protected language = 'en-us';
  protected weatherCache: BehaviorSubject<Weather[]> = new BehaviorSubject<Weather[]>([]);

  constructor(){}

  getSelectedCityID(countryName: string, city: string): string{
    let res = this.cityAutoCompleteResults.value.filter(country => country.country == countryName).filter(country => country.cities.filter(c => c.LocalizedName == city));
    return res[0].cities[0].ID;
  }


  getCityAutoComplete() : Observable<CityGroup[]>{
    return this.cityAutoCompleteResults.asObservable();
  }

  getWeatherUnit(): Observable<WeatherType>{
    return this.unitDisplay.asObservable();
  }

  ToggleTemperatureUnit(){
    if(this.unitDisplay.value == 'C')
      this.unitDisplay.next('F');
    else
      this.unitDisplay.next('C');
  }


  public setGroupCities(cities: CityResult[]){

    let group:CityGroup[] = [];

    let m = new Map<string, number>();
    for(let i =0;i < cities.length;++i){
      let countryName = cities[i].Country.LocalizedName;
      if(!m.has(countryName))
      {
        group.push({country: countryName, cities: new Array<LocalizedID>()})
        m.set(countryName, group.length - 1);
      }

      group[m.get(countryName)].cities.push({ID: cities[i].Key, LocalizedName: cities[i].LocalizedName});

    }
    this.cityAutoCompleteResults.next(group);


  }


   getAllCache() : Observable<Weather[]> {
    return this.weatherCache.asObservable();
   };
  protected getWeatherIndexFromCache(city: string):number{
    return this.weatherCache.value.findIndex(x => x.Name.toLowerCase() == city.toLowerCase());
  }
  abstract getWeatherOfCity(country: string, city: string, useCache?: boolean) : Promise<Weather>;
  public abstract AutoCompleteCities(q: string) : Promise<void>;
  protected abstract getCurrentConditions(locationKey: string) : Promise<ConditionsResult[]>
  protected abstract getFiveDaysDailyForecasts(locationKey: string) : Promise<WeeklyForecast>;
}
