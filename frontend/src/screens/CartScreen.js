import React, { useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroupd, Image, Form, Button, Card } from 'react-bootstrap'

import { Message } from '../components/Message'
import{ addToCart } from '../actions/cartActions'

function CartScreen() {
  const { id } = useParams(); // Get the id parameter from the route
  const location = useLocation(); // Get the location object
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const selectedOptions = Object.fromEntries(queryParams); // Convert query parameters to an object

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  console.log('Cart Items', cartItems)

  useEffect(() => {
    // Dispatch addToCart action only if both id and selectedOptions are present
    if (id && Object.keys(selectedOptions).length > 0) {
      dispatch(addToCart(id, selectedOptions));
    }
  }, [dispatch, id, selectedOptions]); // Dependency array to ensure useEffect runs only when id or selectedOptions change

  // console.log('cartItems:', cartItems);
  return (
    <div>
      Cart Screen
    </div>
  );
}

export default CartScreen;