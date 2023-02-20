import React , {useState} from 'react'
import { Drawer, List, ListItemButton, ListItemText, IconButton, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
    const[openDrawer, setOpenDrawer] = useState(false);
    const Pages = ["Home", "Products", "Blog", "About", "Login", "Logout"];
  return (
    <>
      <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
          <List>
          {
            Pages.map((page, index)=>(
              <ListItemButton key={index} onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                   <ListItemText sx={{width:300}}>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
          </List>
        </Drawer>
        <IconButton sx={{color:"white"}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </>
  )
}

export default DrawerComp;
