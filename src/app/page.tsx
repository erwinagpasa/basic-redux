"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './GlobalRedux/Features/cartSlice';
import { RootState } from './GlobalRedux/store';


export default function Home() {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0); // Add num state variable

  interface Product {
    id: number;
    name: string;
    price: string;
  }

  // Dispatching an action
  const handleSetCart = () => {
    const newCart: Product[] = [
      { id: num, name: 'item-name1', price: '100' },
    ];
    console.log('newCart', newCart);
    dispatch(setCart(newCart));
    setNum(num + 1); // Increment num by 1
  };

  return (
    <>
      <button onClick={handleSetCart}>Set Cart</button>
      <ul>
        {cart?.map((item, index) => (
          <li key={index}>{item.id}  -  {item.name} - {item.price} </li>
        ))}
      </ul>
    </>
  );
};

