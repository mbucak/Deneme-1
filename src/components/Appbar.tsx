import  makeStyles  from '@mui/styles/makeStyles';
import { height } from '@mui/system';
import React, { useState } from 'react'
import logo from '../../src/img/logo.png'

const useStyles = makeStyles(({
  picture: {
    width: "6%",
    margin:4,
    marginLeft:10,

  },
  fnt:{
    fontSize:28,
    color:"#074973",
    marginLeft:120,
    marginTop:-71,
    fontFamily:"Quicksand",
    
  },
  root: {
    height:100,
    margin:0,
    padding:0,
  },
}));

export default function Appbar() {
  const classes=useStyles();
  const [logoImage, setlogoImage] = useState(logo);
  return (
    <div className={classes.root}>
       <img  src={logoImage} className={classes.picture} />
       <div className={classes.fnt}> ONLINE COURSES</div>
    </div>
  )
}


