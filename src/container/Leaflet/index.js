import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import L, { divIcon } from "leaflet";
import seg from "./seg.json";
import ecomp from "./ecomp.json";
import classes from "./main.module.scss";
const Leaflet = ({ cordinate, sortHandler, setParams}) => {
  console.log('cordinate',cordinate);
    const [stroke, setStroke] = useState([
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]);
    const type_id = localStorage.getItem('type_id')
    const [fill, setFill] = useState([
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
    ]);
    const fillColor = [
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
      "#0000ff00",
    ];
  

 const setIcon = ({ properties }, latlng) => {
   return L.marker(latlng, { icon: customMarkerIcon(properties.Name) });
 };
    const customMarkerIcon = (name) =>
      divIcon({
        html: name,
        className: "icon",
      });
    const [map, setMap] = useState(null);
  const onPlacemarkClick = (cords) => {
    var url = "https://maps.google.com/?q=" + cords[0] + "," + cords[1];
    window.open(url, "_blank");
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
          left: 0,
          border: "2px solid #FBCC00",
        }}
      >
        <MapContainer
          ref={setMap}
          style={{
            width: "100%",
            height: "100%",
          }}
          center={cordinate[0]}
          zoom={6}
          fadeAnimation={true}
          markerZoomAnimation={true}
          scrollWheelZoom={false}
          draggable={true}
        >
          <TileLayer url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
          <GeoJSON data={ecomp} pointToLayer={setIcon}/>

          {seg["features"].map((reg, i) => (
            <GeoJSON
              eventHandlers={{
                click: (e) => {
                  map.fitBounds(e.target.getBounds());
                  let a = fillColor;
                  a[i] = "#FF7F7F";
                  setFill(a);
                  sortHandler(reg.properties?.region_id);
                  setParams({id: type_id, region: reg.properties?.region_id})
                  window.localStorage.setItem('region', reg.properties?.region_id)
                },
                mouseout: () => {
                  let str = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                  setStroke(str);
                },
                mouseover: () => {
                  let str = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                  str[i] = 3;
                  setStroke(str);
                },
              }}
              pathOptions={{
                fillColor: fill[i],
                color: "green",
                weight: stroke[i],
              }}
              key={i}
              data={reg.geometry}
            />
          ))}
          {cordinate.map((item) => (
            <Marker
              key={Math.random(item[0])}
              position={[item[0] - 1 + 1, item[1] - 1 + 1]}
            >
              <Popup>
                <h4>{item[3]}</h4>
                <button
                  className={classes.direction}
                  onClick={() =>
                    onPlacemarkClick([item[0] - 1 + 1, item[1] - 1 + 1])
                  }
                >
                  Directions
                </button>
              </Popup>
              <Tooltip>
                  {item[4]}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Leaflet;

