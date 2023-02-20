import {createSlice} from '@reduxjs/toolkit';
import productdata from '../../productsdata'

const initialState = {
   items:productdata,
}

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        sortByCategory(state, action){
           
            const cat_type = action.payload;
            // console.log(cat_type)
            // console.log("items", state)
            // if(cat_type == "Men"){
            //     const sortedProducts = state.items.filter((product)=>
            //         product.category === cat_type
            //     )

            //     state.items = sortedProducts;
            // }
            // else if(cat_type == "Women"){
            //     const sortedProducts = state.items.filter((product)=>
            //         product.category === cat_type
            //     )

            //     state.items = sortedProducts;
            // }
            // else{
            //     state.items = productdata;
            // }
                
        },
        sortByPrice(state, action){},
        sortByRange(state, action){},
    }
});

// console.log(filterSlice.actions);

export default filterSlice.reducer;

export const {sortByCategory, sortByPrice, sortByRange} = filterSlice.actions;