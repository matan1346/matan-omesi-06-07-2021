import { TemperatureUnit } from "./conditions.model";

export interface DailyForecast{
  Date: string;
  Day: {Icon: number; IconPhrase: string; HasPrecipitation: boolean;};
  EpocDate: number;
  Link: string;
  MobileLink: string;
  Night: {Icon: number; IconPhrase: string; HasPrecipitation: boolean;};
  Sources: string[];
  Temperature: {Maximum: TemperatureUnit; Minimum: TemperatureUnit;};
};


export interface WeeklyForecast{
  DailyForecasts: DailyForecast[];
  Headline: {
    Category: string;
    EffectiveDate: string;
    EffectiveEpocDate: number;
    EndDate?: any;
    EndEpocDate?: any;
    Link: string;
    MobileLink: string;
    Severity: number;
    Text: string;
  };
};
