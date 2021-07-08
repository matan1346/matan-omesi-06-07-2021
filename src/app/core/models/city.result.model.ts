

interface LocalizedID{
  ID: string;
  LocalizedName: string;
}


export interface CityResult{
  AdministrativeArea: LocalizedID;
  Country: LocalizedID;
  Key: string;
  LocalizedName: string;
  Rank: number;
  Type: string;
  Version: number;
}

