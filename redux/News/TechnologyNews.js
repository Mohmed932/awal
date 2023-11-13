import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const TechnologyNewsData = createAsyncThunk(
  "Technology/TechnologyNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/technology?page=${count}&limit=7`
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
export const TechnologyNewsViews = createAsyncThunk(
  "Technology/TechnologyNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/technology/views");
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
  TechnologyNews: null,
  loading: false,
  status: false,
  TechnologyViews: null,
  TechnologyViewsloading: false,
  TechnologyViewsstatus: false,
  totalPage: null,
};

const getTechnologyNews = createSlice({
  name: "Technology",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(TechnologyNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(TechnologyNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.TechnologyNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(TechnologyNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(TechnologyNewsViews.pending, (state, action) => {
        state.TechnologyViewsloading = true;
      })
      .addCase(TechnologyNewsViews.fulfilled, (state, action) => {
        state.TechnologyViewsloading = false;
        state.TechnologyViews = action.payload;
      })
      .addCase(TechnologyNewsViews.rejected, (state, action) => {
        state.TechnologyViewsloading = false;
        state.TechnologyViewsstatus = true;
      });
  },
});

export default getTechnologyNews.reducer;
