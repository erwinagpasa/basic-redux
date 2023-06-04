import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import cart from '../GlobalRedux/Features/cartSlice';

const reducers = combineReducers({
  cart: cart,
});

const persistConfig = {
  key: 'cart',
  storage,
};

const reducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
