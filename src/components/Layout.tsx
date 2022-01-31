import { useMediaQuery, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import MobileNav from './MobileNav';
import Appbar from './Appbar';
import Sidenav from './Sidenav';
import SidenavApi from '../containers/SidenavApi';

type Props = {
  children: React.ReactNode;
}

const useStyles = makeStyles(({
  desktop: {
    display: 'flex',
    paddingLeft: 290,
    flexDirection: 'column',
    paddingTop:0, // 64px Appbar bu kısım değişti
    minHeight: '100%',
    background: "#f2f2f2",//yok
  },
  main: {
    flex: 1,
    width: '100%',
    overflow: 'auto',
    
  },
  mobile: {
    display: 'flex',
    paddingBottom: 56, //56px BottomNav
    flexDirection: 'column',
    minHeight: '100%',
  },
  mobileMain: {
    flex: 1,
    overflow: 'auto',
    
  },
}));

export default function Layout({ children }: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  return matches ? ( // desktop mode
    <React.Fragment>
      <Appbar />
      <div className={classes.desktop}>
        <Sidenav />
        <div className={classes.main}>
          {children}
        </div>
      </div>
    </React.Fragment>
  ) : ( // mobile mode
    <div className={classes.mobile}>
      <div className={classes.mobileMain}>
        {children}
      </div>
      <MobileNav />
    </div>
  );
}
