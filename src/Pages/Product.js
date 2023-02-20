import { Box, Button,Slider, FormControlLabel,FormControl,FormLabel, Grid, Radio, RadioGroup, Typography,useTheme, useMediaQuery } from '@mui/material';
import React from 'react'
import data from '../productsdata';
import FilterDrawerComp from './FilterDrawerComp';
import { useDispatch, useSelector } from 'react-redux';
import { sortByCategory } from '../store/slices/FilterSlice';
import { addToCart } from '../store/slices/CartSlice';


const Product = () => {
    const dispatch = useDispatch();
    const filterdata = useSelector((state)=> state.filters);
    // console.log(filterdata)
    
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

    const handleChange=(event)=>{
        const value = event.target.defaultValue;
        dispatch(sortByCategory(value));
    }

    const addItem=(item)=>{
        dispatch(addToCart(item))
    }
  return (
    <Grid container columnSpacing={2}>
        <Grid item lg={3} mt={2}>
            {
                isMatch ? (
                   <FilterDrawerComp/>
                ):
                (
                    <>
                      <Typography textAlign="center">Filter</Typography>
                  <Box pl={2} mt={2}>
                <FormControl>
                    <FormLabel >Category</FormLabel>
                    <RadioGroup
                        defaultValue="All"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="All" control={<Radio />} label="All" onChange={(e)=>handleChange(e)} />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" onChange={(e)=>handleChange(e)}/>
                        <FormControlLabel value="Women" control={<Radio />} label="Women" onChange={(e)=>handleChange(e)}/>
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box pl={2} mt={2}>
                <FormControl>
                    <FormLabel >Sort By Price</FormLabel>
                    <RadioGroup
                        defaultValue="All"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Low to High" control={<Radio />} label="Low to High" onChange={(e)=>handleChange(e)} />
                        <FormControlLabel value="High to Low" control={<Radio />} label="High to Low" onChange={(e)=>handleChange(e)}/>
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 300 }} pl={2} mt={2}>
                <FormLabel >Sort By Range</FormLabel>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    valueLabelDisplay="auto"
                />
            </Box>
            <Button variant='contained'>Clear Filter</Button>
                    </>
                )
            }
        </Grid>
        <Grid item lg={9}>
            <Grid container>

        {data.map((data)=>(
            
            <Grid item lg={4} md={6} sm={6} xs={12} textAlign="center" key={data.id}>
                <Box p={3} bgcolor="whitesmoke">
                <img src={data.image} width='100%' height="300px" style={{objectFit:"contain"}} />
                <Typography>{data.title}</Typography>
                <Typography>Price:{data.price}/-</Typography>
                <Button variant='contained' onClick={()=>addItem(data)}>Add to Cart</Button>
                </Box>
            </Grid>

            ))}
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Product;
