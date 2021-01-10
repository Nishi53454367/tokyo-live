import React, { useState, useEffect } from 'react';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import YouTube from 'react-youtube';
import { Location, Camera, Live } from '../interfaces/LiveType';

const mapStyle = {
  height: '85vh',
  width: '100%',
};

const playerOption = {
  height: '240',
  width: '360',
};

const LiveCameraMap: React.FC<Live> = ({ area, cameraList }) => {
  // マーカー押下時の対象ライブカメラの描画有無
  const [infoWindows, setInfoWindows] = useState<boolean[]>(Array(cameraList.length));
  // マーカー押下時の中心座標
  const [
    center, setCenter,
  ] = useState<Location>(area.location);
  // ウインドウオープン(マーカー押下)
  const enableInfoWindows = (index: number, location: Location) => {
    setInfoWindows(
      [
        ...infoWindows.slice(0, index),
        true,
        ...infoWindows.slice(index + 1),
      ],
    );
    setCenter({ ...center, lat: location.lat, lng: location.lng });
  };
  // ウインドウクローズ
  const disableInfoWindows = (index: number, location: Location) => {
    setInfoWindows(
      [
        ...infoWindows.slice(0, index),
        false,
        ...infoWindows.slice(index + 1),
      ],
    );
    setCenter({ ...center, lat: location.lat, lng: location.lng });
  };
  // 描画エリアの座標が更新される度に中心座標を更新
  useEffect(() => {
    setCenter({ ...center, lat: area.location.lat, lng: area.location.lng });
  }, [area.location]);
  // UI
  return (
    <LoadScript
      googleMapsApiKey={String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)}
    >
      <GoogleMap
        mapContainerStyle={mapStyle}
        center={{ lat: center.lat, lng: center.lng }}
        zoom={area.zoom}
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
                  onCloseClick={() => disableInfoWindows(index, camera.location)}
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
};

export default LiveCameraMap;
