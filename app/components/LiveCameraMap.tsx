import React, { useState } from 'react';
import { ValueType } from 'react-select';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import YouTube from 'react-youtube';
import Layout from './Layout';
import {
  Location,
  Camera,
  LiveProps,
} from '../interfaces/LiveType';

// GoogleMapサイズ
const mapStyle = {
  height: '85vh',
  width: '100%',
};

// YouTubePlayerオプション
const playerOption = {
  height: '240',
  width: '360',
};

// ライブカメラマップ
const LiveCameraMap: React.FC<LiveProps> = ({ area, cameraList }) => {
  // ライブカメラの表示・非表示
  const [infoWindows, setInfoWindows] = useState<boolean[]>(Array(cameraList.length));
  // 中心座標
  const [
    center, setCenter,
  ] = useState<Location>(area.location);
  // 拡大比率
  const [zoom, setZoom] = useState<number>(area.zoom);

  // エリア選択
  const selectArea = (
    option: ValueType<{ label: string; value: { location: Location, zoom: number } }, false>,
  ) => {
    setCenter({
      ...center,
      lat: Number(option?.value.location.lat),
      lng: Number(option?.value.location.lng),
    });
    setZoom(Number(option?.value.zoom));
  };
  // ライブカメラ表示(マーカー押下)
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
  // ライブカメラ非表示(クローズ押下)
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

  return (
    <Layout selectArea={selectArea}>
      <LoadScript
        googleMapsApiKey={String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)}
      >
        <GoogleMap
          mapContainerStyle={mapStyle}
          center={{ lat: center.lat, lng: center.lng }}
          zoom={zoom}
        >
          {cameraList.map((camera: Camera, index) => (
            <div key={camera.videoId}>
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
                    <YouTube videoId={camera.videoId} opts={playerOption} />
                  </InfoWindow>
                ) : ''
              }
            </div>
          ))}
        </GoogleMap>
      </LoadScript>
    </Layout>
  );
};

export default LiveCameraMap;
