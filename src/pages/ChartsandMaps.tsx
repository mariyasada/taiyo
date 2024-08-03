import React, { useEffect, useState } from "react";
import { useMapData } from "../utils/useMapData";
import LineGraph from "../Components/LineGraph";
import { FormattedData } from "../types";
import MapLeaflet from "../Components/MapLeaflet";
import { Months } from "../Constants";

const ChartsandMaps = () => {
  const [lineGraphData, setLineGraphData] = useState<FormattedData[]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const {
    graphData,
    isGraphDataLoading,
    isGraphDataError,
    isCountrySpecificDataError,
    isCountrySpecificDataLoading,
    countrySpecificData,
    worldWideData,
    isLoading,
    error,
  } = useMapData();

  useEffect(() => {
    if (graphData) {
      const monthlyData: { [key: string]: { cases: number; deaths: number; recovered: number } } = {};

      const dates = new Set([
        ...Object.keys(graphData.cases || {}),
        ...Object.keys(graphData.recovered || {}),
        ...Object.keys(graphData.deaths || {})
      ]);

     

      dates.forEach((date) => {
        const dateObj = new Date(date);
        const monthYear = `${Months[dateObj.getMonth() + 1]}-${dateObj.getFullYear()}`; // month-year
  
        if (!monthlyData[monthYear]) {
          monthlyData[monthYear] = { cases: 0, deaths: 0, recovered: 0 };
        }
  
        monthlyData[monthYear].cases += graphData.cases[date] || 0;
        monthlyData[monthYear].deaths += graphData.deaths[date] || 0;
        monthlyData[monthYear].recovered += graphData.recovered[date] || 0;
      });
  
      const formattedData: FormattedData[] = Object.keys(monthlyData).map((key) => ({
        date: key,
        cases: monthlyData[key].cases,
        deaths: monthlyData[key].deaths,
        recovered: monthlyData[key].recovered,
      }));
  
      setLineGraphData(formattedData);
  }
  }, [graphData]);



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 flex-wrap overflow-hidden mx-2 lg:mx-4 lg:gap-6">
      <h2 className="text-2xl font-semibold w-full text-center max-[450px]:text-left max-[450px]:ml-6">
        Charts and Maps
      </h2>
      <div className="w-full overflow-x-auto">
        <LineGraph
          data={lineGraphData}
          isGraphDataLoading={isGraphDataLoading}
          screenWidth={screenWidth}
        />
      </div>
      <div className="w-full overflow-x-auto">
        <MapLeaflet
          countrySpecificData={countrySpecificData}
          worldWideData={worldWideData}
          isCountrySpecificDataLoading={isCountrySpecificDataLoading}
          screenWidth={screenWidth}
        />
      </div>
    </div>
  );
};

export default ChartsandMaps;
