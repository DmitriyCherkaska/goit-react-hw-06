import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'edux-persist';
import storage from 'edux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
