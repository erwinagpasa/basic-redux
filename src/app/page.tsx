"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './GlobalRedux/Features/cartSlice';
import { RootState } from './GlobalRedux/store';

interface Product {
  id: string;
  name: string;
  price: string;
}
export default function Home() {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Dispatching an action
  const handleSetCart = () => {
    const newCart: Product[] = [
      { id: 'item-id', name: 'item-name1', price: 'item-100' },
    ];
    console.log('newCart', newCart);
    dispatch(setCart(newCart));
  };

  return (
    <>
      <button onClick={handleSetCart}>Set Cart</button>
      <ul>
        {cart?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

