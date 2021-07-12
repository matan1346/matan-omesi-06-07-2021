import { ConditionsResult } from "./conditions.model";
import { WeeklyForecast } from "./daily.forecast.model";


export interface Weather{
  ID: string;
  Country: string;
  Name: string;
  WeatherData: {CurrentConditions: ConditionsResult[]; WeeklyDailyForecast: WeeklyForecast};
}

export type WeatherType = 'C' | 'F';
