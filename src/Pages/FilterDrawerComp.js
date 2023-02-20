import React ,{useState} from 'react'
import {Grid, Drawer,Button, Radio, Slider, Box, FormControl, FormLabel,FormControlLabel, IconButton, RadioGroup } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterDrawerComp = () => {
    const[openFilterDrawer, setFilterOpenDrawer] = useState(false);
    const[openSortDrawer, setSortOpenDrawer] = useState(false);
    const handleChange=()=>{

    }

  return (
    <>
    <Drawer open={openFilterDrawer} anchor={'left'} onClose={()=>setFilterOpenDrawer(false)}>
    <Box p={2}>
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
            <Box sx={{ width: 300 }} p={2}>
                <FormLabel >Sort By Range</FormLabel>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    valueLabelDisplay="auto"
                />
            </Box>
        <Button variant='contained' sx={{width:200, margin:"auto"}}>Apply</Button>
    </Drawer>
    <Drawer open={openSortDrawer} anchor={'bottom'} onClose={()=>setSortOpenDrawer(false)}>
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
            
        <Button variant='contained'>Apply</Button>
    </Drawer>
     <Grid container>
        <Grid item sm={6}>
        <IconButton  onClick={()=>setSortOpenDrawer(!openSortDrawer)}>
            <Button variant="contained" startIcon={<SortIcon />}>Sort</Button>
        </IconButton>
        </Grid>
        <Grid item sm={6}>
        <IconButton  onClick={()=>setFilterOpenDrawer(!openFilterDrawer)}>
            <Button variant="contained" startIcon={<FilterListIcon />}>Filter</Button>
        </IconButton>
        </Grid>
    </Grid>
    </>
  )
}

export default FilterDrawerComp;
