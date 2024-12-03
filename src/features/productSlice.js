import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  const savedItems = localStorage.getItem('cartItems');
  return savedItems ? JSON.parse(savedItems) : [];
};

const initialState = {
  items: loadFromLocalStorage(),
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
