import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import receiveService from "./receiveService";

const initialState = {
  receives: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new receive
export const createReceive = createAsyncThunk(
  "receives/create",
  async (receiveData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await receiveService.createReceive(receiveData, token);
    } catch (error) {
      alert("Error: " + error.message);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user receive
export const getReceive = createAsyncThunk(
  "receives/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await receiveService.getReceive(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user receive
export const deleteReceive = createAsyncThunk(
  "receives/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await receiveService.deleteReceive(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const receiveSlice = createSlice({
  name: "receives",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReceive.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReceive.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.receives.push(action.payload);
      })
      .addCase(createReceive.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReceive.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReceive.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.receives = action.payload;
      })
      .addCase(getReceive.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteReceive.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReceive.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.receives = state.receives.filter(
          (receives) => receives._id !== action.payload.id
        );
      })
      .addCase(deleteReceive.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = receiveSlice.actions;
export default receiveSlice.reducer;
