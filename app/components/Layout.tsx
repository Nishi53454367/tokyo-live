import React, { ReactNode } from 'react';
import Link from 'next/link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Live } from '../interfaces/LiveType';
import { LiveDataList } from '../utils/LiveData';

type Props = {
  children?: ReactNode
  title?: string
}

const labelColor = '#eaf6f8';

const useStyles = makeStyles(() => createStyles({
  header: {
    width: '100%',
  },
  title: {
    padding: 3,
    textDecoration: 'none',
  },
  footer: {
    marginLeft: 5,
    color: labelColor,
  },
}));

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <header>
        <div className={classes.header}>
          <Box display="flex" p={0}>
            <Box p={1} flexGrow={1} color={labelColor}>
              <span className={classes.title}>
                <Link href="/live">YouTube LiveCamera Map</Link>
              </span>
            </Box>
            <Box p={1} color={labelColor}>
              test
            </Box>
          </Box>
        </div>
      </header>
      {children}
      <hr />
      <footer className={classes.footer}>
        <Typography variant="caption" display="block" gutterBottom>
          <li>YouTube側の都合で動画は予告なく見れなくなる可能性があります</li>
          <li>地図上の座標(YouTubeアイコン)は実際のカメラ設置場所から多少ズレていることがあります</li>
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
