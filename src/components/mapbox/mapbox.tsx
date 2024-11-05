import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from 'react-map-gl';

import React from 'react';

interface MapboxProps {
  ubication: [number, number];
  direction?: string;
  height?: number;
}

export function Mapbox({ ubication, direction, height }: MapboxProps) {
  if (!ubication || ubication.length < 2) {
    console.error(
      'Ubication is not defined or does not have the correct format'
    );
    return (
      <div>
        Error: Ubication is not defined or does not have the correct format
      </div>
    );
  }

  const coordinates = ubication;

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
      initialViewState={{
        longitude: ubication[1],
        latitude: ubication[0],
        zoom: 14.5,
      }}
      style={{ width: '100%', height: height || 500, minHeight: '500px' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <Marker longitude={coordinates[1]} latitude={coordinates[0]}></Marker>
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      <GeolocateControl />
      <Popup anchor="top" longitude={coordinates[1]} latitude={coordinates[0]}>
        <div>{direction}</div>
      </Popup>
    </Map>
  );
}
