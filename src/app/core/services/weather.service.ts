import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeeklyForecast } from '../models/daily.forecast.model';
import { ConditionsResult } from '../models/conditions.model';
import { CityResult } from '../models/city.result.model';
import { Weather } from '../models/weather.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  WEATHER_DAYS = ['Sun','Mon','Tue','Wed','Thu'];

  private baseURL = 'http://dataservice.accuweather.com/';
  private language = 'en-us';
  private weatherCache: BehaviorSubject<Weather[]> = new BehaviorSubject<Weather[]>([]);

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}


  getAllCache() : Observable<Weather[]> {
    return this.weatherCache.asObservable();
  }


  private getWeatherIndexFromCache(city: string){
    return this.weatherCache.value.findIndex(x => x.Name.toLowerCase() == city.toLowerCase());
  }

  async getWeatherOfCity(city: string, useCache = true){

    if(!city || city.length == 0)
      return null;

    let index = this.getWeatherIndexFromCache(city);
    if(useCache && index >= 0)
      return this.weatherCache.value[index]; // return cache

    let weather: Weather = null;

    try{
      // call api
      let searchRes = await this.getAuthocomplete(city);
      if(searchRes.length == 0)
        return null;

      let cityDetails = searchRes[0];
      let conditions = await this.getCurrentConditions(cityDetails.Key);
      let forecasts = await this.getFiveDaysDailyForecasts(cityDetails.Key);


      weather = {ID: cityDetails.Key,Name: cityDetails.LocalizedName, WeatherData: {
        CurrentConditions: conditions, WeeklyDailyForecast:forecasts
      }};


      let currentWeatherCache = this.weatherCache.value;

      if(index >= 0)
        currentWeatherCache[index] = weather;
      else
        currentWeatherCache.push(weather);

      this.weatherCache.next(currentWeatherCache);
      this.toastr.success(`Weather data of ${city} is beeing loaded into the screen`);
    }
    catch(e){
      this.toastr.error(`Could not get weather of the city: ${city}`);
    }

    return weather;
  }


  private async getAuthocomplete(city: string) : Promise<CityResult[]>{

    if(!city || city.length == 0)
      return [];

    let params = new HttpParams();

    params = params.append('apikey', environment.weatherAPI);
    params = params.append('q',city);
    params = params.append('language', this.language);
    let res:any = [];

    try{
      res = await this.httpClient.get<CityResult>(this.baseURL +'locations/v1/cities/autocomplete', {params: params} ).toPromise();
      if(res.length == 0)
      this.toastr.info(`There is no city named ${city}`);
    }
    catch(err){
      this.toastr.error(`Could not get current auto complete of the city: ${city}`);
    }
    return res;
  }

  private async getCurrentConditions(locationKey: string) : Promise<ConditionsResult[]>{

    let params = new HttpParams();

    params = params.append('apikey', environment.weatherAPI);
    params = params.append('details', 'false');
    params = params.append('language', this.language);
    let res:any = null;

    try{
      res = await this.httpClient.get<ConditionsResult[]>(this.baseURL +`currentconditions/v1/${locationKey}`, {params: params} ).toPromise();
    }
    catch(err){
      this.toastr.error('Could not get current conditions of a weather');
    }
    return res;
  }


  private async getFiveDaysDailyForecasts(locationKey: string) : Promise<WeeklyForecast>{

    let params = new HttpParams();

    params = params.append('apikey', environment.weatherAPI);
    params = params.append('details', 'false');
    params = params.append('metric', 'false');
    params = params.append('language', this.language);
    let res:any = null;

    try{
      res = await this.httpClient.get<WeeklyForecast>(this.baseURL +`forecasts/v1/daily/5day/${locationKey}`, {params: params} ).toPromise();
    }
    catch(err){
      this.toastr.error('Could not get five daily forecast information');
    }
    return res;
  }





}
