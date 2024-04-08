import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, selectedOptions) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: {
          id: data._id,
          name: data.name,
          image: data.image,
          description: data.description,
        },
        selectedOptions: selectedOptions,
      },
    });
    // You can also update localStorage here
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    // Handle error
  }
};
