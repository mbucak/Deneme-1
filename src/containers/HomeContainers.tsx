import React from 'react'
import HomeCard from '../components/HomeCard';
import HomeCard2 from '../components/HomeCard2';
import HomeCard3 from '../components/HomeCard3';
import HomeCard4 from '../components/HomeCard4';
import makeStyles from '@mui/styles/makeStyles';



const useStyles = makeStyles(({

  row: {
    display: 'flex',
    flexDirection: 'row',
    //  justifyContent: 'space-around',
    marginLeft: 20,
  },
}));

export default function HomeContainers() {
    const classes=useStyles();
    return (
        <div className={classes.row}> 
            <HomeCard2 />
            <HomeCard3 />
            <HomeCard />
            <HomeCard4 />
        </div>
    )
}
