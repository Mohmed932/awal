import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const lastNews = createAsyncThunk(
  "news/lastNews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/last");
      const res = await req.json();
      if (!req.ok) {
        rejectWithValue(res.message);
      } else {
        return res;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  last: null,
  loading: false,
  status: false,
};

const getLastNews = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(lastNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(lastNews.fulfilled, (state, action) => {
        state.loading = false;
        state.last = action.payload;
      })
      .addCase(lastNews.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      });
  },
});

export default getLastNews.reducer;
