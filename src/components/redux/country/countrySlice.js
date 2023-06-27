import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk('coutries/getCountries', async () => {
  try {
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [getCountries.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

});

export default countrySlice.reducer;
