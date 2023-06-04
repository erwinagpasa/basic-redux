import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: [],
};

interface Product {
  id: number;
  name: string;
  price: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Product[]>) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
