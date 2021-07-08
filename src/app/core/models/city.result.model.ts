

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

// AdministrativeArea: {ID: "TA", LocalizedName: "Tel Aviv"}
// Country: {ID: "IL", LocalizedName: "Israel"}
// Key: "215854"
// LocalizedName: "Tel Aviv"
// Rank: 31
// Type: "City"
// Version: 1
