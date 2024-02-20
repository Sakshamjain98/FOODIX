import { configureStore } from "@reduxjs/toolkit"
import cartReaducer from "./cartSlice";
const appStore= configureStore({
    reducer:{
        cart: cartReaducer,
    },
});

export default appStore;