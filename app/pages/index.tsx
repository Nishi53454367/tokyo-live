import React from 'react';
import LiveTopPage from './live/index';
import { getNationwideLiveDataList } from '../utils/LiveData';

const IndexPage: React.FC = () => {
  const { area, cameraList } = getNationwideLiveDataList();
  return (
    <LiveTopPage area={area} cameraList={cameraList} />
  );
};

export default IndexPage;
