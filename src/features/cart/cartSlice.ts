import { createSlice } from "@reduxjs/toolkit";


export interface ProductInterface {
    id: number;
    category?: string;
    description?: string;
    image?: string;
    price?: number;
    title?: string;
    quantity?: number;
}

export interface CartsInterface {
    carts: Array<ProductInterface>,
    cartItem: ProductInterface,
    totalPrice: number;
}

const initialState: CartsInterface = {
    carts: [],
    cartItem: {
        id: 0,
        category: "",
        image: "",
        price: 0,
        title: "",
        quantity: 0,
    },
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.totalPrice) {
                state.totalPrice = 0;
            }
            const productInCart = state.carts.find(
                (product) => product.id === action.payload.id
            );
            if (productInCart) {
                productInCart.quantity += action.payload.quantity;
                if (productInCart.price !== undefined) {
                    productInCart.price += action.payload.price * action.payload.quantity;
                }
            } else {
                state.carts.push({
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                    image: action.payload.image,
                    price: action.payload.price * action.payload.quantity,
                });
            }
            state.totalPrice = state.carts.reduce(
                (total, product) => (total += product.price || 0),
                0
            );
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const productInCartIndex = state.carts.findIndex((product) => product.id === id);

            if (productInCartIndex !== -1) {
                const removedProduct = state.carts.splice(productInCartIndex, 1)[0];
                state.totalPrice -= removedProduct.price || 0;
            }
        },
        updateCartItem: (state, action) => {
            const { id, quantity } = action.payload;
            const productInCart = state.carts.find((product) => product.id === id);

            if (productInCart) {
                const oldQuantity = productInCart.quantity || 0;
                const oldPrice = productInCart.price || 0;
                const newQuantity = quantity || 0;
                const newPrice = (productInCart.price || 0) / oldQuantity * newQuantity;
                if(newQuantity > 0){
                    productInCart.quantity = newQuantity;
                    productInCart.price = newPrice;
                    state.totalPrice += newPrice - oldPrice;
                }
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart,updateCartItem } = cartSlice.actions

export default cartSlice.reducer