

export interface TemperatureUnit {
  Unit: string;
  UnitType: number;
  Value: number;
}



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

