import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const News_Search = createAsyncThunk(
  "news/News_Search",
  async (searchResult, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/search?search=${searchResult}`
      );
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
  search: null,
  loading: false,
  status: false,
};

const SearchAllNews = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(News_Search.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(News_Search.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(News_Search.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      });
  },
});

export default SearchAllNews.reducer;
