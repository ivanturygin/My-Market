import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({

	name: 'cart',

	initialState: {

		products: JSON.parse(localStorage.getItem("cartProduct")) || [],

	},

	reducers:{

		addProduct:(prevState, action) => {

			const product = action.payload;
			
		   const inCart = prevState.products.some((prevProduct) => prevProduct.id === product.id)

			if(inCart){

				return {...prevState};

			};
		
			return {

				...prevState,

				products: [...prevState.products, action.payload],
			};

		},

		deleteProduct:(prevState, action) => {
			const product = action.payload;

			return {
				...prevState,
				products: prevState.products.filter((prevProduct)=>{
            return prevProduct.id !== product.id;
			})}
         
		}

	},
		
});


export const {addProduct} = cartSlice.actions;
export const {deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;