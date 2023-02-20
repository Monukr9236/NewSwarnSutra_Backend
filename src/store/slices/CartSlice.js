import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
            console.log(state.cartItems)
            // const itemIndex = state.cartItems.findIndex((item)=> item.id == action.payload.id);
            // if(itemIndex >= 0){
            //    state.cartItems[itemIndex].cartQuantity += 1;
            // }
            // else{
            //     const tempProduct = {...action.payload , cartQuantity:1};
            //     state.cartItems.push(tempProduct);
            // }
        },
        removeItem(state, action){},
        clearCart(state, action){},
    }
});

export default cartSlice.reducer;

export const {addToCart} = cartSlice.actions;