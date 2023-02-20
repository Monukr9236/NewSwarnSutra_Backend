import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/FilterSlice";
import cartSlice from "./slices/CartSlice";


const store = configureStore({
    reducer:{
        filters: filterSlice,
        carts: cartSlice,
    }
});

export default store;