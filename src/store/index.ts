import { configureStore } from '@reduxjs/toolkit';
import reducer from './fixtures';

const store = configureStore({ reducer });

export default store;
