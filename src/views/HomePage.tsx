import {
  AddRounded as AddIcon
} from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import HomeContainers from '../containers/HomeContainers';



const useStyles = makeStyles(({
  root: {
    height: 'calc(100vh - 90px)',
    background:'#f2f2f2',
  },
  fab: {
    fontSize:20,
    marginBottom:25,
    marginLeft:25,
  },
  
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title={"Yeni Ders Ekle"}>
        <Fab className={classes.fab} component={Link} to="/dersler/yeni" color="primary" sx={{ position: 'absolute', bottom: 16, right: 16 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <br/>
      <div className={classes.fab}>Tüm Dersler</div>
      <div >
        <HomeContainers/>
      </div>
    </div>
  )
}
