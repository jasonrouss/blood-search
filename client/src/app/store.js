import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice";
import bloodReducer from "../features/blood/bloodSlice";
import receiveReducer from "../features/receive/receiveSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blood: bloodReducer,
    receives:receiveReducer,
  },
});
