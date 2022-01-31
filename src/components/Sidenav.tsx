
import makeStyles from '@mui/styles/makeStyles';
import { useLocation } from 'react-router-dom';
import { Paper } from '@mui/material';

import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useNavigate } from 'react-router';



const useStyles = makeStyles(({
  bck: {
    background: "#f2f2f2",
  }
  ,
  root: {
    height: 'calc(100% - 64px)', // 64px Appbar
    width: '290px',
    background: "#f2f2f2",
    position: 'fixed',
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
    overflow: 'scroll',
    "&::-webkit-scrollbar": {
      width: 0
    },
  },

}));


// type Props={
//   lessonName: string;
// }

const dataJson = [{
  "id": 1,
  "lessonName": "Yapay Zeka",
  "title": "Ms",
  "description": "Fracture of condylar process of left mandible, subsequent encounter for fracture with nonunion",
  "price": "$15.62",
  "teacherId": 1
}, {
  "id": 2,
  "lessonName": "Siber Güvenlik",
  "title": "Dr",
  "description": "Nondisplaced fracture of lateral malleolus of left fibula, subsequent encounter for open fracture type I or II with malunion",
  "price": "$13.32",
  "teacherId": 2
}, {
  "id": 3,
  "lessonName": "Mobil Programlama",
  "title": "Honorable",
  "description": "Diphtheritic tubulo-interstitial nephropathy",
  "price": "$10.71",
  "teacherId": 3
}, {
  "id": 4,
  "lessonName": "Oyun Programlama",
  "title": "Mrs",
  "description": "Adult sexual abuse, confirmed, subsequent encounter",
  "price": "$12.27",
  "teacherId": 4
},
 
]

export default function Sidenav() {
  const classes = useStyles();
  const nav = useNavigate();
  const [open, setOpen] = React.useState(true);
  //  const nav = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <div className={classes.bck}>
      <Paper className={classes.root} elevation={2}>
        
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Kategoriler
        </ListSubheader>
      }
    >  
      <ListItemButton  onClick={() => { nav(`/`) }}>
        <ListItemIcon>
          <BookIcon color="primary" fontSize="small"/>
        </ListItemIcon >
        <ListItemText primary="Tüm dersler" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LibraryBooksIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Fakülte Grupları" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      

      {dataJson.map((item) => (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => { nav(`/${item.id}`) }}>
            <ListItemIcon>
              <StarOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={item.lessonName} />
          </ListItemButton>
        </List>
      </Collapse>
      ))}

    </List>
      </Paper>
    </div>

  )
}






