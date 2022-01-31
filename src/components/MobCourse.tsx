import React from 'react';
import AICourseImg from './AICourseImg';
import AICourseInfo from './AICourseInfo';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import { Height } from '@mui/icons-material';
import AddCard from './AddCard';
import MobCourseImg from './MobCourseImg';
import MobCourseInfo from './MobCourseInfo';

const useStyles = makeStyles(({
  root: {
    height: 'calc(100vh - 90px)',
    background: '#f2f2f2',
  },
  img: {
    minWidth: '50%'
  },

}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function MobCourse() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Card sx={{
          minWidth: '80%', minHeight: '90%', margin: 3, borderRadius: 2,
          border: "2px solid #f2f2f2",
        }}>
          <CardContent>
           
            <MobCourseImg/>
            <MobCourseInfo/>
          </CardContent>
          <AddCard />
        </Card>
      </div>
    )
  
  
  }
  