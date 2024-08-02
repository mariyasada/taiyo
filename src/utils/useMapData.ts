import axios from "axios";
import { useQuery } from "react-query";

export const useMapData = () => {
  const fetchAllData = async () => {
    return await axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) =>res.data);
  };

  const {
    data: worldWideData,
    isLoading,
    error,
    refetch,
  } = useQuery("worldwideData", fetchAllData);

  const fetchCountrySpecificData = async () => {
    return await axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.data);
  };

  const {
    data: countrySpecificData,
    isLoading: isCountrySpecificDataLoading,
    error: isCountrySpecificDataError,
    refetch: isCountrySpecificDatarefetch,
  } = useQuery("countrySPecificData", fetchCountrySpecificData);

  const fetchGraphData = async () => {
    return await axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) =>res?.data?.cases);
  };

  const {
    data: graphData,
    isLoading: isGraphDataLoading,
    error: isGraphDataError,
    refetch: isGraphDatarefetch,
  } = useQuery("graphData", fetchGraphData);

  return {
    graphData,
    isGraphDataLoading,
    isGraphDataError,
    isCountrySpecificDataError,
    isCountrySpecificDataLoading,
    countrySpecificData,
    worldWideData,
    isLoading,
    error,
  };
};
