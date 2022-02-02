import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageProgramming1 from '../../src/img/yapay zeka.jpg'
import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({
  row: {
    margin: 5,
  },
}));

type CourseCardProps = {
  course: any;
}


export default function CourseCard({ course }: CourseCardProps) {
  const classes = useStyles();
  return (
    <div>
      <Card sx={{ maxWidth: 260, }} className={classes.row}>
        <CardMedia
          component="img"
          height="130"
          image={course.cover_img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Satın Al
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
