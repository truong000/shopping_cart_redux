import { createSlice } from "@reduxjs/toolkit";


export interface ProductInterface {
    id: number;
    category?: string;
    description?: string;
    image?: string;
    price?: number;
    title?: string;
    quantity: number;
}

export interface CartsInterface {
    carts: Array<ProductInterface>,
    cartItem: ProductInterface
}

const initialState: CartsInterface = {
    carts:[],
    cartItem:{
        id: 0,
        category: "",
        image: "",
        price: 0,
        title: "",
        quantity: 0,
    }
}

const cartSilce = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("action", action);
            const productInCart = state.carts.find((product) => product.id === action.payload.id);
            if(productInCart) {
                productInCart.quantity += action.payload.quantity
            } else {
                state.carts.push({
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                })
            }
            console.log("CartItem", productInCart?.quantity)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart} = cartSilce.actions

export default cartSilce.reducer