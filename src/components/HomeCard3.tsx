import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageProgramming1 from '../../src/img/siber.jpg'
import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({
  row: {
   margin:5,
  },
}));


export default function HomeCard3() {
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
                  Siber Güvenlik
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Siber Güvenlik; bilgisayarları, sunucuları, mobil cihazları, elektronik sistemleri, ağları ve verileri kötü amaçlı saldırılardan koruma uygulamasıdır.
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
