import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeeklyForecast } from '../models/daily.forecast.model';
import { ConditionsResult } from '../models/conditions.model';
import { CityGroup, CityResult } from '../models/city.result.model';
import { Weather } from '../models/weather.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { WeatherContract } from '../contract/weather.contract';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends WeatherContract {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    super();
  }

  
  async getWeatherOfCity(country: string,city: string, useCache = true): Promise<Weather>{

    if(!country || country.length == 0 || !city || city.length == 0)
      return null;

    let index = this.getWeatherIndexFromCache(city);
    if(useCache && index >= 0)
      return this.weatherCache.value[index]; // return cache

    let weather: Weather = null;

    try{
      let selectedCityID = this.getSelectedCityID(country, city);

      let conditions = await this.getCurrentConditions(selectedCityID);
      let forecasts = await this.getFiveDaysDailyForecasts(selectedCityID);


      weather = {ID: selectedCityID,Country: country,Name: city, WeatherData: {
        CurrentConditions: conditions, WeeklyDailyForecast:forecasts
      }};


      let currentWeatherCache = this.weatherCache.value;

      if(index >= 0)
        currentWeatherCache[index] = weather;
      else
        currentWeatherCache.push(weather);

      this.weatherCache.next(currentWeatherCache);
      console.log('weather data:');
      console.log(weather);
      this.toastr.success(`Weather data of ${city} is beeing loaded into the screen`);
    }
    catch(e){
      this.toastr.error(`Could not get weather of the city: ${city}`);
    }

    return weather;
  }


  public async AutoCompleteCities(city: string) : Promise<void>{

    if(!city || city.length == 0)
      return;

    let params = new HttpParams();

    params = params.append('apikey', environment.weatherAPI);
    params = params.append('q',city);
    params = params.append('language', this.language);
    let res:any[] = [];

    try{
      res = await this.httpClient.get<any[]>(this.baseURL +'locations/v1/cities/autocomplete', {params: params} ).toPromise();
      console.log('success');
      console.log(res)
      this.setGroupCities(res);
      if(res.length == 0)
        this.toastr.info(`There is no results for the query ${city}`);
    }
    catch(err){
      this.toastr.error(`Could not get current auto complete of the city: ${city}`);
    }
  }

  protected async getCurrentConditions(locationKey: string) : Promise<ConditionsResult[]>{

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


  protected async getFiveDaysDailyForecasts(locationKey: string) : Promise<WeeklyForecast>{

    let params = new HttpParams();

    params = params.append('apikey', environment.weatherAPI);
    params = params.append('details', 'false');
    params = params.append('metric', 'true');
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
