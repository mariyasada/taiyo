import React from "react";
import { CountrySpecificData, CovidStats } from "../types";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const globalIconPng = "/Location.png";

console.log(globalIconPng, "png image");
const globalIconInstance = L.icon({
  iconUrl: globalIconPng,
  iconSize: [52, 52],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

type MyComponentProps = {
  countrySpecificData: CountrySpecificData[];
  worldWideData: CovidStats;
  isCountrySpecificDataLoading: boolean;
  screenWidth:number
};

const MapLeaflet = ({
  countrySpecificData,
  worldWideData,
  isCountrySpecificDataLoading,
  screenWidth
}: MyComponentProps) => {
  return (
    <>
      {isCountrySpecificDataLoading ? (
        <div className="flex flex-col p-4 rounded-lg ">
          <div className="w-[1100px] max-[450px]:w-[280px] h-6 bg-gray-300 mb-4 rounded-md animate-pulse" />
          <div className="w-[1100px] max-[450px]:w-[280px] h-32 bg-gray-300 mb-4 rounded-md animate-pulse" />
          <div className="w-[1100px] max-[450px]:w-[280px] h-6 bg-gray-300 rounded-md animate-pulse" />
        </div>
      ) : (
        <div
          style={{
            height: screenWidth < 500 ? "350px" : "500px",
            width: screenWidth < 500 ? "290px" : "100%",
          }}
        >
        <MapContainer
          center={[0, 0]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {worldWideData && (
            <Marker position={[-10, 0]} icon={globalIconInstance}>
              <Popup>
                <div>
                  <strong>World wide Data</strong>
                  <br />
                  Active: {worldWideData.active}
                  <br />
                  Recovered: {worldWideData.recovered}
                  <br />
                  Deaths: {worldWideData.deaths}
                  <br />
                  TotalCases:{worldWideData.cases}
                </div>
              </Popup>
            </Marker>
          )}
          {countrySpecificData?.map((country) => (
            <Marker
              key={country.countryInfo.iso3}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <strong>{country.country}</strong>
                  <br />
                  Active: {country.active}
                  <br />
                  Recovered: {country.recovered}
                  <br />
                  Deaths: {country.deaths}
                  <br />
                  Cases: {country.cases}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </div>
      )}
    </>
  );
};

export default MapLeaflet;
