import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
