import {RootState} from "../store";

export const selectFilter = (state: RootState) => state.filterSlice
export const selectSort = (state: RootState) => state.filterSlice.sort