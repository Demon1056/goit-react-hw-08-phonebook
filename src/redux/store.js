import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { myContactsSlice } from './contacts/myContactSlise';

export const store = configureStore({
  reducer: {
    myContacts: myContactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
