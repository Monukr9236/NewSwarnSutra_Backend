import React, { Fragment, useState } from 'react'
import { Button, Tab, Tabs, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const Pages = ["home", "about", "products", "blog"];
    const[value, setValue] = useState(0);
  
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

  return (
    <Fragment>
      <AppBar sx={{background:"#063970"}} position="static">
       
       <Toolbar>
        <Typography flex={1} textAlign="left" component={Link} to='/' sx={{textDecoration:"none" ,color:"white"}}>Logo</Typography>
         {isMatch ? (
          <>
           <DrawerComp/>
          </>
         ):
         (
           <>
           <Tabs  textColor="inherit" sx={{flexGrow:"1"}} value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
             {
               Pages.map((page, index)=>(
                 <Tab key={index} label={page} LinkComponent={Link} to={index > 0 ? `/${page}` : '/'}/>
               ))
             }
           </Tabs>
            <Button sx={{color:"white"}}  LinkComponent={Link} to='/cart'><ShoppingCartIcon/></Button>
            <Button variant='contained' sx={{marginLeft:"10px"}} LinkComponent={Link} to='/login'>Login</Button>
            <Button variant='contained' sx={{marginLeft:"10px"}} LinkComponent={Link} to='/logout'>Logout</Button>
         
           </>
         )
         }
         </Toolbar>
       </AppBar>
    </Fragment>
  )
}

export default Navbar;
