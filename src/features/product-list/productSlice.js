import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductById } from "./ProductListAPI";

const initialState = {
  products: [],
  status: "idle",
  totalItems: 0,
  selectedProduct: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchProductsByIdAsync = createAsyncThunk(
  "product/fetchProductsById",
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectProductById = (state) => state.product.selectedProduct;

export default counterSlice.reducer;
