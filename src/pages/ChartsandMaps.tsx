import React, { useEffect, useState } from 'react'
import { useMapData } from '../utils/useMapData'
import LineGraph from '../Components/LineGraph';
import { FormattedData} from '../types';
import MapLeaflet from '../Components/MapLeaflet';

const ChartsandMaps = () => {
    const [lineGraphData,setLineGraphData]=useState<FormattedData[]>([])
    const { graphData,
        isGraphDataLoading,
        isGraphDataError,
        isCountrySpecificDataError,
        isCountrySpecificDataLoading,
        countrySpecificData,
        worldWideData,
        isLoading,
        error}=useMapData();


        useEffect(()=>{
            if(graphData){
            const formattedData:FormattedData[] = Object.keys(graphData).map(date => ({
                date,
                cases: graphData[date],
              }));
              setLineGraphData(formattedData);
            }
        },[graphData])

       
  return (
    <div className='flex flex-col gap-8 flex-wrap'>
        <h2 className='font-semibold text-2xl max-[450px]:text-md ml-6'>Charts and Maps</h2>
        <LineGraph data={lineGraphData}/>
        <MapLeaflet countrySpecificData={countrySpecificData} worldWideData={worldWideData}/>
        </div>
  )
}

export default ChartsandMaps