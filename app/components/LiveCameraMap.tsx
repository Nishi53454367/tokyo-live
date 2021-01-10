import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Select, { ValueType } from 'react-select';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import YouTube from 'react-youtube';
import {
  Location,
  LiveInfo,
  Camera,
  LiveProps,
} from '../interfaces/LiveType';
import { LiveInfoList } from '../utils/LiveDataInfo';

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

// 選択エリア
const options = LiveInfoList.map((liveInfo: LiveInfo) => ({
  label: liveInfo.area.name,
  value: { location: liveInfo.area.location, zoom: liveInfo.area.zoom },
}));

// style
const labelColor = '#eaf6f8';
const useStyles = makeStyles(() => createStyles({
  header: {
    width: '100%',
  },
  select: {
    minWidth: 200,
  },
  attention: {
    textAlign: 'right',
    color: labelColor,
  },
  footer: {
    textAlign: 'center',
    color: labelColor,
  },
}));

const LiveCameraMap: React.FC<LiveProps> = ({ area, cameraList }) => {
  const classes = useStyles();

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

  // UI
  return (
    <div>
      <header>
        <div className={classes.header}>
          <Box display="flex" p={0}>
            <Box p={1} flexGrow={1} color={labelColor}>
              <Typography variant="h6">
                YouTube LiveCamera Map
              </Typography>
            </Box>
            <Box p={1} className={classes.select}>
              <Select
                placeholder="都道府県を絞り込む"
                options={options}
                onChange={(option) => selectArea(option)}
              />
            </Box>
          </Box>
        </div>
      </header>
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
      <div className={classes.attention}>
        <Typography variant="overline">
          カメラ座標のズレや予告なく動画が見れなくなる場合があるので予めご了承ください。
        </Typography>
      </div>
      <hr style={{ margin: 0 }} />
      <footer className={classes.footer}>
        <Typography variant="caption" display="block" gutterBottom>
          © 2021 Nishi53454367
        </Typography>
      </footer>
    </div>
  );
};

export default LiveCameraMap;
