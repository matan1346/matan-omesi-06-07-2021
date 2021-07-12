import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { WeatherContract } from "../contract/weather.contract";
import { CityResult } from "../models/city.result.model";
import { ConditionsResult } from "../models/conditions.model";
import { WeeklyForecast } from "../models/daily.forecast.model";
import { Weather } from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherTestService extends WeatherContract{


  constructor(private toastr: ToastrService){
    super();

    let data: Weather[] = [
      {
        "ID": "215854",
        "Country": 'IL',
        "Name": "Tel Aviv",
        "WeatherData": {
            "CurrentConditions": [
                {
                    "LocalObservationDateTime": "2021-07-11T20:05:00+03:00",
                    "EpochTime": 1626023100,
                    "WeatherText": "Clear",
                    "WeatherIcon": 33,
                    "HasPrecipitation": false,
                    "PrecipitationType": null,
                    "IsDayTime": false,
                    "Temperature": {
                        "Metric": {
                            "Value": 29.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 85,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
                }
            ],
            "WeeklyDailyForecast": {
                "Headline": {
                    "EffectiveDate": "2021-07-11T20:00:00+03:00",
                    "EffectiveEpochDate": 1626022800,
                    "Severity": 7,
                    "Text": "Warm Sunday night",
                    "Category": "heat",
                    "EndDate": "2021-07-12T08:00:00+03:00",
                    "EndEpochDate": 1626066000,
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
                },
                "DailyForecasts": [
                    {
                        "Date": "2021-07-11T07:00:00+03:00",
                        "EpochDate": 1625976000,
                        "Temperature": {
                            "Minimum": {
                                "Value": 78,
                                "Unit": "F",
                                "UnitType": 18
                            },
                            "Maximum": {
                                "Value": 89,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Day": {
                            "Icon": 1,
                            "IconPhrase": "Sunny",
                            "HasPrecipitation": false
                        },
                        "Night": {
                            "Icon": 33,
                            "IconPhrase": "Clear",
                            "HasPrecipitation": false
                        },
                        "Sources": [
                            "AccuWeather"
                        ],
                        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
                    },
                    {
                        "Date": "2021-07-12T07:00:00+03:00",
                        "EpochDate": 1626062400,
                        "Temperature": {
                            "Minimum": {
                                "Value": 77,
                                "Unit": "F",
                                "UnitType": 18
                            },
                            "Maximum": {
                                "Value": 89,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Day": {
                            "Icon": 1,
                            "IconPhrase": "Sunny",
                            "HasPrecipitation": false
                        },
                        "Night": {
                            "Icon": 34,
                            "IconPhrase": "Mostly clear",
                            "HasPrecipitation": false
                        },
                        "Sources": [
                            "AccuWeather"
                        ],
                        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
                        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
                    },
                    {
                        "Date": "2021-07-13T07:00:00+03:00",
                        "EpochDate": 1626148800,
                        "Temperature": {
                            "Minimum": {
                                "Value": 75,
                                "Unit": "F",
                                "UnitType": 18
                            },
                            "Maximum": {
                                "Value": 88,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Day": {
                            "Icon": 2,
                            "IconPhrase": "Mostly sunny",
                            "HasPrecipitation": false
                        },
                        "Night": {
                            "Icon": 34,
                            "IconPhrase": "Mostly clear",
                            "HasPrecipitation": false
                        },
                        "Sources": [
                            "AccuWeather"
                        ],
                        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
                        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
                    },
                    {
                        "Date": "2021-07-14T07:00:00+03:00",
                        "EpochDate": 1626235200,
                        "Temperature": {
                            "Minimum": {
                                "Value": 76,
                                "Unit": "F",
                                "UnitType": 18
                            },
                            "Maximum": {
                                "Value": 86,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Day": {
                            "Icon": 2,
                            "IconPhrase": "Mostly sunny",
                            "HasPrecipitation": false
                        },
                        "Night": {
                            "Icon": 33,
                            "IconPhrase": "Clear",
                            "HasPrecipitation": false
                        },
                        "Sources": [
                            "AccuWeather"
                        ],
                        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
                        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
                    },
                    {
                        "Date": "2021-07-15T07:00:00+03:00",
                        "EpochDate": 1626321600,
                        "Temperature": {
                            "Minimum": {
                                "Value": 79,
                                "Unit": "F",
                                "UnitType": 18
                            },
                            "Maximum": {
                                "Value": 88,
                                "Unit": "F",
                                "UnitType": 18
                            }
                        },
                        "Day": {
                            "Icon": 1,
                            "IconPhrase": "Sunny",
                            "HasPrecipitation": false
                        },
                        "Night": {
                            "Icon": 34,
                            "IconPhrase": "Mostly clear",
                            "HasPrecipitation": false
                        },
                        "Sources": [
                            "AccuWeather"
                        ],
                        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
                        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
                    }
                ]
            }
        }
    },
      {ID: '2',Country: 'IL', Name: 'Ramat Gan', WeatherData:{
        CurrentConditions: [
          {EpochTime: 1, HasPrecipitation: true, IsDayTime: true, Link: 'http', LocalObservationDateTime: '', MobileLink:'http',
          Temperature: null, WeatherIcon: 1, WeatherText: 'Sunny'},
          {EpochTime: 1, HasPrecipitation: true, IsDayTime: true, Link: 'http', LocalObservationDateTime: '', MobileLink:'http',
          Temperature: null, WeatherIcon: 1, WeatherText: 'Sunny'}
        ],
        WeeklyDailyForecast: {
          DailyForecasts: [
            {Date: 'date', EpochDate: 1, Temperature:{Maximum:{Unit: 'C', UnitType: 1, Value: 25},Minimum:{Unit: 'C', UnitType: 1, Value: 20}}},
            {Date: 'date', EpochDate: 1, Temperature:{Maximum:{Unit: 'C', UnitType: 1, Value: 25},Minimum:{Unit: 'C', UnitType: 1, Value: 20}}},
            {Date: 'date', EpochDate: 1, Temperature:{Maximum:{Unit: 'C', UnitType: 1, Value: 25},Minimum:{Unit: 'C', UnitType: 1, Value: 20}}},
            {Date: 'date', EpochDate: 1, Temperature:{Maximum:{Unit: 'C', UnitType: 1, Value: 25},Minimum:{Unit: 'C', UnitType: 1, Value: 20}}},
            {Date: 'date', EpochDate: 1, Temperature:{Maximum:{Unit: 'C', UnitType: 1, Value: 25},Minimum:{Unit: 'C', UnitType: 1, Value: 20}}}
          ],
          Headline: {Text: 'Lol'}
        }
      }}
    ]


    this.weatherCache.next(data);
   }

   async getWeatherOfCity(country: string,city: string, useCache: boolean = true) : Promise<Weather>{
    let index = this.getWeatherIndexFromCache(city);
    if(index >= 0){
      return this.weatherCache.value[index];
    }
    this.toastr.error('no data exists!');
   }
  public  AutoCompleteCities(str: string): Promise<void>{
    return null;
  }
  protected  getCurrentConditions(locationKey: string) : Promise<ConditionsResult[]>{
    return null;
  }
  protected  getFiveDaysDailyForecasts(locationKey: string) : Promise<WeeklyForecast>{
    return null;
  }
}
