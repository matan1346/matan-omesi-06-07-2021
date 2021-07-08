import { ConditionsResult } from "./conditions.model";
import { WeeklyForecast } from "./daily.forecast.model";


export interface Weather{
  ID: string;
  Name: string;
  WeatherData: {CurrentConditions: ConditionsResult[]; WeeklyDailyForecast: WeeklyForecast};
}
