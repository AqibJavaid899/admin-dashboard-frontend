import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import globalSlice from "./slices/globalSlice";
import { api } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);
