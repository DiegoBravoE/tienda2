import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios'
import getConfig from '../../utils/getConfig';
import { getPurchase } from './Purchase.slice';



export const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
 setCart:(state,action)=>{
     return action.payload;
 }
        
    }
})

export const { setCart } = cartSlice.actions;

export const getCart = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`,getConfig())
        .then(res => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const addToCart = (addproduct) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`,addproduct,getConfig())
        .then(() =>{
             dispatch(getCart())
            alert("Se añadio el producto con exito")
            })
        .catch(error=>console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
}
export const buy = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`,{},getConfig())
        .then(() => {
            dispatch(getPurchase())
           dispatch(setCart([]))  
          alert("la compra se realizo con exito")
})
        .finally(() => dispatch(setIsLoading(false)));
}


export default cartSlice.reducer;
