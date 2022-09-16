import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  categoryId: 0,
  currentPage: 1
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action) => {
      state.currentPage = Number.parseInt(action.payload.currentPage, 10);
      state.categoryId = Number.parseInt(action.payload.categoryId, 10);
      state.sort = action.payload.sort;
    }
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;