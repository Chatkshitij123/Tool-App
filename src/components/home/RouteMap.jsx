import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const RouteMap = ({
  routePoints,
  fromCoord,
  toCoord,
}) => {
  if (!routePoints?.length)
    return null;

  return (
    <div className="map-container">

      <MapContainer
        center={routePoints[0]}
        zoom={6}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <Polyline
          positions={routePoints}
        />

        <Marker
          position={[
            fromCoord.lat,
            fromCoord.lng,
          ]}
        />

        <Marker
          position={[
            toCoord.lat,
            toCoord.lng,
          ]}
        />
      </MapContainer>

    </div>
  );
};

export default RouteMap;