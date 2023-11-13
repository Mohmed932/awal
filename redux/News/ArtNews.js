import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const artNewsData = createAsyncThunk(
  "art/artNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/art?page=${count}&limit=7`
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
export const artNewsViews = createAsyncThunk(
  "art/artNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/art/views");
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
  artNews: null,
  loading: false,
  status: false,
  artViews: null,
  artViewsloading: false,
  artViewsstatus: false,
  totalPage: null,
};

const getArtNews = createSlice({
  name: "art",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(artNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(artNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.artNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(artNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(artNewsViews.pending, (state, action) => {
        state.artViewsloading = true;
      })
      .addCase(artNewsViews.fulfilled, (state, action) => {
        state.artViewsloading = false;
        state.artViews = action.payload;
      })
      .addCase(artNewsViews.rejected, (state, action) => {
        state.artViewsloading = false;
        state.artViewsstatus = true;
      });
  },
});

export default getArtNews.reducer;
