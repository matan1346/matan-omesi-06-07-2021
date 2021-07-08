

export interface TemperatureUnit {
  Unit: string;
  UnitType: number;
  Value: number;
}

/*export interface Temperature{
  Imperial: TemperatureUnit;
  Metric: TemperatureUnit
}*/


// false not all the data
export interface ConditionsResult{
  EpocTime: number;
  HasPrecipitation: boolean;
  IsDayTime: boolean;
  Link: string;
  LocalObservationDateTime: string;
  MobileLink: string;
  PrecipitationType?: any;
  Temperature: any;
  WeatherIcon: number;
  WeatherText: string;
}


// EpochTime: 1625672100
// HasPrecipitation: false
// IsDayTime: true
// Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
// LocalObservationDateTime: "2021-07-07T18:35:00+03:00"
// MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
// PrecipitationType: null
// Temperature:
//   Imperial:
//     Unit: "F"
//     UnitType: 18
//     Value: 85
//   Metric:
//     Unit: "C"
//     UnitType: 17
//     Value: 29.7
// WeatherIcon: 1
// WeatherText: "Sunny"
