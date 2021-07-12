import { TemperatureUnit } from "./conditions.model";

export interface DailyForecast{
  Date: string;
  Day?: {Icon: number; IconPhrase: string; HasPrecipitation: boolean;};
  EpochDate: number;
  Link?: string;
  MobileLink?: string;
  Night?: {Icon: number; IconPhrase: string; HasPrecipitation: boolean;};
  Sources?: string[];
  Temperature:any;
};


export interface WeeklyForecast{
  DailyForecasts: DailyForecast[];
  Headline: {
    Category?: string;
    EffectiveDate?: string;
    EffectiveEpochDate?: number;
    EndDate?: any;
    EndEpochDate?: any;
    Link?: string;
    MobileLink?: string;
    Severity?: number;
    Text: string;
  };
};
