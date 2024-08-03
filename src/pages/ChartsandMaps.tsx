import React, { useEffect, useState } from "react";
import { useMapData } from "../utils/useMapData";
import LineGraph from "../Components/LineGraph";
import { FormattedData } from "../types";
import MapLeaflet from "../Components/MapLeaflet";

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
      const formattedData: FormattedData[] = Object.keys(graphData).map(
        (date) => ({
          date,
          cases: graphData[date],
        })
      );
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
