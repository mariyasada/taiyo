
 export interface ContactType {
    id: string;
    firstName: string;
   lastName: string;
   status:string;
   
  }
export type ReducerInitialState={
    contactList:ContactType[]
}

export interface RootState {
    contactReducer:ReducerInitialState;
  }

export type AddorUpdateContactAction= {
  type:string;
  payload: ContactType ;
}

export type DeleteContactAction={
    type:string;
    payload:string;
}

export type ContactActionTypes = AddorUpdateContactAction | DeleteContactAction ;
export type FormattedData={
    date:string,
    cases:number
    deaths:number,
    recovered:number
}
export type CountrySpecificData={
    country:string,
    countryInfo:{
        iso3:string,
        lat:number,
        long:number
    }
    cases:number,
    todayCases:number
    deaths: number,
    todayDeaths: number,
    recovered: number,
    todayRecovered: number,
    active: number,
}
export type CovidStats= {
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
  }