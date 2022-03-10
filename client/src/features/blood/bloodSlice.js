import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bloodService from "./bloodService";

const initialState = {
  blood: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};




// Create new blood
export const createBlood = createAsyncThunk(
  "blood/create",
  async (bloodData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bloodService.createBlood(bloodData, token);
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

// Get user blood
export const getBlood = createAsyncThunk(
  "blood/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bloodService.getBlood(token);
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

// Delete user blood
export const deleteBlood = createAsyncThunk(
  "blood/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bloodService.deleteBlood(id, token);
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

export const bloodSlice = createSlice({
  name: "blood",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blood.push(action.payload);
      })
      .addCase(createBlood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBlood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blood = action.payload;
      })
      .addCase(getBlood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBlood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blood = state.blood.filter(
          (blood) => blood._id !== action.payload.id
        );
      })
      .addCase(deleteBlood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
     
  },
});

export const { reset } = bloodSlice.actions;
export default bloodSlice.reducer;
