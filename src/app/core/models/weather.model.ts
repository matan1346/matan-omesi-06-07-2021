import { ConditionsResult } from "./conditions.model";
import { WeeklyForecast } from "./daily.forecast.model";

export interface Country{
  ID: string;
  localizedName: string;
};

export interface AdministrativeArea{
  ID: string;
  localizedName: string;
};

export interface Weather2{
  version: number;
  key: string;
  type: string;
  rank: number;
  localizedName: string;
  country: Country;
  administrativeArea: AdministrativeArea;
}




export interface Weather{
  ID: string;
  Name: string;
  WeatherData: {CurrentConditions: ConditionsResult[]; WeeklyDailyForecast: WeeklyForecast};
}
