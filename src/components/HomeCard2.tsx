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
   margin:5,
  },
}));



export default function HomeCard2() {
    const [programming1, setProgramming1] = useState(ImageProgramming1);
    const classes=useStyles();
    return (
        <Card sx={{ maxWidth: 260, }} className={classes.row}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="130"
              image={programming1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Yapay Zeka
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yapay Zeka; görevleri yerine getirmek için insan zekasını taklit eden ve topladıkları bilgilere göre yinelemeli olarak kendilerini iyileştirebilen sistemlerdir.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Dr.öğr üyesi 
            </Button>
          </CardActions>
        </Card>
     );
}
