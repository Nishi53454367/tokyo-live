import React, { useRef, useState } from 'react';
import { ValueType } from 'react-select';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import YouTube from 'react-youtube';
import Layout from './Layout';
import { Location, CameraInfo } from '../interfaces/type';

/** GoogleMapサイズ */
const MAP_STYLE = {
  height: '85vh',
  width: '100%',
};

/** YouTubePlayerオプション */
const PLAYER_OPTION = {
  height: '240',
  width: '360',
};

type Props = {
  cameraList: CameraInfo[];
};

/** ライブカメラマップ */
const LiveCameraMap: React.FC<Props> = ({ cameraList }) => {
  /** GoogleMap Ref */
  const mapRef = useRef<any>();

  /** ライブカメラの表示・非表示 */
  const [infoWindows, setInfoWindows] = useState<boolean[]>(Array(cameraList.length));

  /** 中心座標(初期値：日本全体) */
  const [
    center, setCenter,
  ] = useState<Location>({ lat: 38.6803521, lng: 140.1719602 });

  /** 拡大比率(初期値：日本全体) */
  const [zoom, setZoom] = useState<number>(5.2);

  /** カメラ選択 */
  const selectCamera = (
    option: ValueType<{ label: string; value: { location: Location } }, false>,
  ) => {
    setCenter({
      ...center,
      lat: Number(option?.value.location.lat),
      lng: Number(option?.value.location.lng),
    });
    setZoom(Number(15));
  };

  /** ライブカメラ表示(マーカー押下) */
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

  /** ライブカメラ非表示(クローズ押下) */
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
    <Layout cameraList={cameraList} selectCamera={selectCamera}>
      <LoadScript
        googleMapsApiKey={String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)}
      >
        <GoogleMap
          mapContainerStyle={MAP_STYLE}
          onLoad={(map: any) => { mapRef.current = map; }}
          center={{ lat: center.lat, lng: center.lng }}
          zoom={zoom}
        >
          {cameraList.map((cameraInfo: CameraInfo, index) => (
            <div key={cameraInfo.videoId}>
              <Marker
                icon={{ url: '/YouTube-icon-32.png' }}
                position={{ lat: cameraInfo.location.lat, lng: cameraInfo.location.lng }}
                onClick={() => enableInfoWindows(index, cameraInfo.location)}
              />
              {
                infoWindows[index] ? (
                  <InfoWindow
                    position={{
                      lat: cameraInfo.location.lat,
                      lng: cameraInfo.location.lng,
                    }}
                    onCloseClick={() => {
                      // クローズ時に中心座標がカメラの座標に戻らないよう現在の中心座標を取得して設定
                      const currentCenter = mapRef.current.getCenter().toJSON();
                      disableInfoWindows(
                        index, { lat: Number(currentCenter.lat), lng: Number(currentCenter.lng) },
                      );
                    }}
                  >
                    <YouTube videoId={cameraInfo.videoId} opts={PLAYER_OPTION} />
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
