import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Bar() {
  return (
    <div>
       
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
          <HomeOutlinedIcon sx={{color:"white",margin:"24px"}}/>
          </Link>
        <Link to="/add_book">
           <AddIcon sx={{color:"white"}}/>
           <ImportContactsIcon sx={{color:"white"}}/>
           </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Bar