import React from 'react';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import YouTube from 'react-youtube';
import { Location, Camera } from '../interfaces/LiveData';

type Props = {
  cameraList: Camera[];
  infoWindows: boolean[];
  center: Location;
  enableInfoWindows: (index: number, location: Location) => void;
  disableInfoWindows: (index: number) => void;
};

const mapStyle = {
  height: '90vh',
  width: '100%',
};

const playerOption = {
  height: '240',
  width: '360',
};

const LiveCameraMap: React.FC<Props> = ({
  cameraList, infoWindows, center, enableInfoWindows, disableInfoWindows,
}) => (
  <LoadScript
    googleMapsApiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)}
  >
    <GoogleMap
      mapContainerStyle={mapStyle}
      center={{ lat: center.lat, lng: center.lng }}
      zoom={10}
    >
      {cameraList.map((camera: Camera, index) => (
        <div key={camera.id}>
          <Marker
            icon={{ url: '/YouTube-icon-32.png' }}
            position={{ lat: camera.location.lat, lng: camera.location.lng }}
            onClick={() => enableInfoWindows(index, camera.location)}
          />
          {
            infoWindows[index] ? (
              <InfoWindow
                position={{
                  lat: camera.location.lat,
                  lng: camera.location.lng,
                }}
                onCloseClick={() => disableInfoWindows(index)}
              >
                <YouTube videoId={camera.id} opts={playerOption} />
              </InfoWindow>
            ) : ''
          }
        </div>
      ))}
    </GoogleMap>
  </LoadScript>
);

export default LiveCameraMap;
