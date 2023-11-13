import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ViewsNews = createAsyncThunk(
  "news/ViewsNews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/views");
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
  views: null,
  loading: false,
  status: false,
};

const getViews = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(ViewsNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ViewsNews.fulfilled, (state, action) => {
        state.loading = false;
        state.views = action.payload;
      })
      .addCase(ViewsNews.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      });
  },
});

export default getViews.reducer;
