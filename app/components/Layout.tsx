import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Select, { ValueType } from 'react-select';
import { Live } from '../interfaces/LiveType';
import { LiveDataList } from '../utils/LiveData';

type Props = {
  children?: ReactNode
  title?: string
}

const options = LiveDataList.map((live: Live) => (
  { label: live.area.name, value: live.area.pathName }
));

const labelColor = '#eaf6f8';

const useStyles = makeStyles(() => createStyles({
  header: {
    width: '100%',
  },
  title: {
    color: labelColor,
    textDecoration: 'none',
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

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleChange = (option: ValueType<{ label: string; value: string; }, false>) => {
    router.push(`/live/${option?.value}`);
  };
  return (
    <div>
      <header>
        <div className={classes.header}>
          <Box display="flex" p={0}>
            <Box p={1} flexGrow={1} color={labelColor}>
              <Typography variant="h6">
                <Link href="/">
                  <a href="/" className={classes.title}>YouTube LiveCamera Map</a>
                </Link>
              </Typography>
            </Box>
            <Box p={1} className={classes.select}>
              <Select
                placeholder="都道府県を絞り込む"
                options={options}
                onChange={(option) => handleChange(option)}
              />
            </Box>
          </Box>
        </div>
      </header>
      {children}
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

export default Layout;
