import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageProgramming1 from '../../src/img/32.jpg'
import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({
  row: {
   margin:5,
  },
}));

export default function HomeCard() {
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
                Mobil Programlama
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Mobil Programlama, mobil cihazlar ve tabletler için dizayn edilmiş ve kodlanmış programlardır.Bu kursta mobil programlamayı öğreniceksiniz.
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
