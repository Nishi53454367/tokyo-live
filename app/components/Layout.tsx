import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Select, { ValueType } from 'react-select';
import { Location, CameraInfo } from '../interfaces/type';

/** 文字色 */
const LABEL_COLOR = '#46697E';

/** style */
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
    color: LABEL_COLOR,
  },
}));

type Props = {
  cameraList: CameraInfo[] | undefined;
  selectCamera: (
    option: ValueType<{ label: string; value: { location: Location } }, false>
  ) => void | undefined;
}

/** 共通レイアウト */
const Layout: React.FC<Props> = ({ children, cameraList, selectCamera }) => {
  const classes = useStyles();

  /** リスト選択肢を取得 */
  const getOptions = () => cameraList?.map((cameraInfo: CameraInfo) => ({
    label: cameraInfo.q,
    value: { location: cameraInfo.location },
  }));

  return (
    <div>
      <header>
        <div className={classes.header}>
          <Box display="flex" p={0}>
            <Box p={1} flexGrow={1} color={LABEL_COLOR}>
              <Typography variant="h6">
                YouTube LiveCamera Map
              </Typography>
            </Box>
            {selectCamera ? (
              <Box p={1} className={classes.select}>
                <Select
                  placeholder="カメラを選択"
                  options={getOptions()}
                  onChange={(option) => selectCamera(option)}
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
