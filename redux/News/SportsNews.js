import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SportsNewsData = createAsyncThunk(
  "Sports/SportsNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/sports?page=${count}&limit=7`
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
export const SportsNewsViews = createAsyncThunk(
  "Sports/SportsNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/sports/views");
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
  SportsNews: null,
  loading: false,
  status: false,
  SportsViews: null,
  SportsViewsloading: false,
  SportsViewsstatus: false,
  totalPage: null,
};

const getSportsNews = createSlice({
  name: "Sports",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SportsNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SportsNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.SportsNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(SportsNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(SportsNewsViews.pending, (state, action) => {
        state.SportsViewsloading = true;
      })
      .addCase(SportsNewsViews.fulfilled, (state, action) => {
        state.SportsViewsloading = false;
        state.SportsViews = action.payload;
      })
      .addCase(SportsNewsViews.rejected, (state, action) => {
        state.SportsViewsloading = false;
        state.SportsViewsstatus = true;
      });
  },
});

export default getSportsNews.reducer;
