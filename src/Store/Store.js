import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../Reducers/reducer';

const store = configureStore({
  reducer: {
    inputs: inputsReducer,
  },
 
});

export default store;
