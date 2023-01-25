import {createSlice} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({

			name:'favorite',

			initialState: {

				favoritsProduct: JSON.parse(localStorage.getItem("favoritProduct")) || [],

			},

			reducers: {

					addFavorite: (prevState, action) => {

						const product = action.payload;

						const inFavorite = prevState.favoritsProduct.some((prevProduct) => prevProduct.id === product.id)

						if (inFavorite){
							return {...prevState};
							};

							return {

								...prevState,

								favoritsProduct: [...prevState.favoritsProduct, action.payload],

							};
						},

							deleteFavorite: (prevState, action) => {

								const product = action.payload;

								return {
									...prevState,
									favoritsProduct: prevState.favoritsProduct.filter((prevProduct) => {
										return prevProduct.id !== product.id;
									})}
							},
					}
				});

			export const {addFavorite} = favoriteSlice.actions;
			export const {deleteFavorite} = favoriteSlice.actions;
			export default favoriteSlice.reducer;