import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const useStyles = makeStyles(({
  lft: {
    float: 'right',
    right: 0,
  },
}));

export default function AICourseInfo() {
    const classes = useStyles();
    return (
      <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', textDecoration: 'none' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <PlayLessonOutlinedIcon fontSize="large"   />
          </ListItemAvatar>
          <ListItemText
            primary="Ders Adı"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Yapay zeka
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
     
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <NoteOutlinedIcon fontSize="large"   />
          </ListItemAvatar>
          <ListItemText
            primary="Dersin Açıklaması"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                   Yapay zeka; bilgisayarları, sunucuları, mobil cihazları, elektronik sistemleri, ağları ve verileri kötü amaçlı saldırılardan koruma uygulamasıdır.
  
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
   
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <PersonOutlineOutlinedIcon fontSize="large"   />
          </ListItemAvatar>
          <ListItemText
            primary="Eğitmenler"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Dr.Ögr.Üyesi
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
  
        <ListItem alignItems="flex-start" sx={{ position: 'absolute', top: 8, left: 600 }} >
          <ListItemAvatar>
            <CreditScoreOutlinedIcon fontSize="large"   />
          </ListItemAvatar>
          <ListItemText
            primary="Eğitim Ücreti"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  100 TL
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        
        <ListItem alignItems="flex-start" sx={{ position: 'absolute', top: 82, left: 600 }} >
          <ListItemAvatar>
            <LightbulbOutlinedIcon fontSize="large"   />
          </ListItemAvatar>
          <ListItemText
            primary="Kazanımlar"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Bu eğitimde web ağırlıklı ve network alanındaki zafiyetleri tespit etmek ve bunları exploit etmek hedef alınmaktadır.
  
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
  
  
      </List>
    )
}
