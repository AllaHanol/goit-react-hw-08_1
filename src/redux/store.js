import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

// const contactsConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"], // blacklist: ["showProfilesList"]
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,

    filters: filtersReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [
  //           FLUSH,
  //           REHYDRATE,
  //           PAUSE,
  //           PERSIST,
  //           PURGE,
  //           REGISTER,
  //         ],
  //       },
  //     }),
});

// export const persistor =
//   persistStore(store);
