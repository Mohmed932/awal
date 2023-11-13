import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const allSubScriber = createAsyncThunk(
  "subScriber/allSubScriber",
  async (email, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/SubScriber", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const res = await req.json();
      return res.exists;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const SubScriber_News = createSlice({
  name: "subScriber",
  initialState: {
    subScriber: null,
    Loading: false,
    status: false,
  },
  // post users
  extraReducers: (builder) => {
    builder
      .addCase(allSubScriber.pending, (state, action) => {
        state.Loading = true;
      })
      .addCase(allSubScriber.fulfilled, (state, action) => {
        state.Loading = false;
        state.subScriber = action.payload;
      })
      .addCase(allSubScriber.rejected, (state, action) => {
        state.Loading = false;
        state.status = true;
      });
  },
});

export default SubScriber_News.reducer;
