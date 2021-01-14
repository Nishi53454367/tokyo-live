import React from 'react';
import { useRouter } from 'next/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button } from '@material-ui/core';
import Layout from './Layout';

// style
const useStyles = makeStyles(() => createStyles({
  card: {
    margin: 10,
  },
  button: {
    textAlign: 'center',
    marginTop: 10,
  },
}));

// このサイトについて、プライバシーポリシー専用レイアウト
const Board: React.FC = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.card}>
          <Paper>
            {children}
          </Paper>
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={() => router.push('/')}>トップに戻る</Button>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Board;
