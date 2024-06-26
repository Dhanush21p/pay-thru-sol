
import React from 'react';

import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(10),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(20),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}))
function Intro() {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Pay Thru Sol
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Pay Thru Sol is a contactless, borderless and secure cryptocurrency payment technology designed on solana. Shop with crypto or send crypto to friends and family worldwide.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" >
                  <Link to="/newuser" > Generate New key </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" >
                  <Link to="/olduser"> Access Existing Key</Link>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </main>
    </div>
  );
}

export default Intro;