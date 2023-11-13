import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const EconomyNewsData = createAsyncThunk(
  "Economy/EconomyNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/economy?page=${count}&limit=7`
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
export const EconomyNewsViews = createAsyncThunk(
  "Economy/EconomyNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/economy/views");
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
  EconomyNews: null,
  loading: false,
  status: false,
  EconomyViews: null,
  EconomyViewsloading: false,
  EconomyViewsstatus: false,
  totalPage: null,
};

const getEconomyNews = createSlice({
  name: "Economy",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(EconomyNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(EconomyNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.EconomyNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(EconomyNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(EconomyNewsViews.pending, (state, action) => {
        state.EconomyViewsloading = true;
      })
      .addCase(EconomyNewsViews.fulfilled, (state, action) => {
        state.EconomyViewsloading = false;
        state.EconomyViews = action.payload;
      })
      .addCase(EconomyNewsViews.rejected, (state, action) => {
        state.EconomyViewsloading = false;
        state.EconomyViewsstatus = true;
      });
  },
});

export default getEconomyNews.reducer;
