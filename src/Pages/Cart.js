import React from 'react'
import data from '../productsdata'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, Typography , useMediaQuery, useTheme} from '@mui/material'

const Cart = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log("small", isMatch);
  return (
    <>
    <Typography textAlign="center" mt={2}>Shopping Cart</Typography>

    {
        isMatch ? (
            <Grid container mt={5}>
            
                <Grid item sm={6} p={2} xs={6}>
                   <img src={data[0].image} height="200" style={{objectFit:"contain"}}/>
                </Grid>
                <Grid item sm={6}  p={2} xs={6}>
                    <Box>
                      <Typography>{data[0].title}</Typography>
                      <Typography>Price : {data[0].price}</Typography>
                      <Typography>Rs 0/-</Typography>
                    </Box>
                </Grid>
                
            </Grid>
        ):
        (
            <>
                <Grid container mt={5} textAlign="center">
        
                    <Grid item lg={3} md={3} sm={3}>
                        PRODUCT
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        PRICE
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        QUANTITY
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        TOTAL
                    </Grid>
                </Grid>
                <Grid container mt={5} textAlign="center">
            
                    <Grid item lg={3} md={3} sm={3}>
                       <img src={data[0].image} height="200"/>
                       <Typography mt={1}>{data[0].title}</Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        <Typography>{data[0].price}</Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        <Button variant='outlined'>1</Button>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        <Typography>Rs 0/-</Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
    </>
  )
}

export default Cart;

/*
{
        data.length === 0 ? (
          <div className='cart-empty'>
            <p>Your Cart is empty!</p>
            <p>Add a few products and come back here to checkout.</p>
            <div className='start-shopping'>
                 <Link to='/products'>
                      <button className='start-shpping-btn'>Start Shopping</button>
                 </Link>
            </div>
          </div>
        ): (<>
             Item here
            </>
        )

}

*/
