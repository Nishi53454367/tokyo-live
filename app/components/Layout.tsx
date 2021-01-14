import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Select, { ValueType } from 'react-select';
import { Location, LiveInfo } from '../interfaces/LiveType';
import { LiveInfoList } from '../utils/LiveDataInfo';

// 選択エリア
const options = LiveInfoList.map((liveInfo: LiveInfo) => ({
  label: liveInfo.area.name,
  value: { location: liveInfo.area.location, zoom: liveInfo.area.zoom },
}));

// style
const labelColor = '#46697E';
const useStyles = makeStyles(() => createStyles({
  header: {
    width: '100%',
  },
  select: {
    minWidth: 200,
  },
  link: {
    marginLeft: 10,
  },
  footer: {
    textAlign: 'center',
    color: labelColor,
  },
}));

type Props = {
  selectArea?: (
    option: ValueType<{ label: string; value: { location: Location, zoom: number } }, false>
  ) => void;
}

// 共通レイアウト
const Layout: React.FC<Props> = ({ children, selectArea }) => {
  const classes = useStyles();
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
            {selectArea ? (
              <Box p={1} className={classes.select}>
                <Select
                  placeholder="都道府県を絞り込む"
                  options={options}
                  onChange={(option) => selectArea(option)}
                />
              </Box>
            ) : undefined}
          </Box>
        </div>
      </header>
      {children}
      <Typography variant="overline" className={classes.link}>
        <Link href="/about">このサービスについて</Link>
      </Typography>
      <Typography variant="overline" className={classes.link}>
        <Link href="/policy">プライバシーポリシー</Link>
      </Typography>
      <hr style={{ margin: 0 }} />
      <footer className={classes.footer}>
        <Typography variant="caption" display="block" gutterBottom>
          © 2021 Nishi53454367
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
