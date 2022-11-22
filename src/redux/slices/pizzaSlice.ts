import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
import {Sort} from "./filterSlice";

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
}

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
  const {category, sortBy, order, search, currentPage} = params
  const {data} = await axios.get(`https://630c81af83986f74a7c2ada9.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`)
  return data
})

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

type Pizza = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
}


interface PizzaSliceState {
  items: Pizza[];
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPizzas.pending, (state, action) => {
        state.status = Status.LOADING
        state.items = [];
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.ERROR
        state.items = [];
    })

    // [fetchPizzas.pending]: (state, action) => {
    //   state.status = 'loading';
    //   state.items = [];
    // },
    // [fetchPizzas.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    //   state.status = 'success'
    // },
    // [fetchPizzas.rejected]: (state, action) => {
    //   state.status = 'error';
    //   state.items = [];
    // },
  },
})
export const selectPizzaData = (state: RootState) => state.pizzaSlice
export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer