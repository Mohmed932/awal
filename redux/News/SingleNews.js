import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SingleNewsData = createAsyncThunk(
  "news/SingleNewsData",
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(`https://serverawalbawl.vercel.app/news/${_id}`);
      const res = await req.json();
      if (!req.ok) {
        rejectWithValue(res.message);
      } else {
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  single: null,
  loading: false,
  status: false,
};

const SingleNews = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SingleNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SingleNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.single = action.payload;
      })
      .addCase(SingleNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      });
  },
});

export default SingleNews.reducer;
