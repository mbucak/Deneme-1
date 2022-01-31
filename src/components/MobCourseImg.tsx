import React, { useState } from 'react'
import makeStyles from '@mui/styles/makeStyles';
import ImageProgramming1 from '../../src/img/32.jpg'

const useStyles = makeStyles(({
  root: {
    fontSize: 22,
    color: "black",
    fontFamily: "Quicksand",
    textAlign:'center',
    marginBottom:10,
  },
  imgStyle:{
    width:"35%",
    marginLeft:"32.5%",
    marginRight:"32.5%",
    borderRadius: 8,
    border: "1px solid white",    
  }
}));

export default function MobCourseImg() {
    const [programming, setProgramming1] = useState(ImageProgramming1);
    const classes = useStyles();
    return (
      <div >
        <div className={classes.root}>
          DERS BİLGİLERİ
        </div>
        <img className={classes.imgStyle} src={programming} />
      </div>
  
  
    )
}

