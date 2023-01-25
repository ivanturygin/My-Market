import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import favoriteReducer from "./reducers/favorite-reducer";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorite: favoriteReducer,
	},
})