import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const WorldNewsData = createAsyncThunk(
  "World/WorldNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/World?page=${count}&limit=7`
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
export const WorldNewsViews = createAsyncThunk(
  "World/WorldNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/World/views");
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
  WorldNews: null,
  loading: false,
  status: false,
  WorldViews: null,
  WorldViewsloading: false,
  WorldViewsstatus: false,
  totalPage: null,
};

const getWorldNews = createSlice({
  name: "World",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(WorldNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(WorldNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.WorldNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(WorldNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(WorldNewsViews.pending, (state, action) => {
        state.WorldViewsloading = true;
      })
      .addCase(WorldNewsViews.fulfilled, (state, action) => {
        state.WorldViewsloading = false;
        state.WorldViews = action.payload;
      })
      .addCase(WorldNewsViews.rejected, (state, action) => {
        state.WorldViewsloading = false;
        state.WorldViewsstatus = true;
      });
  },
});

export default getWorldNews.reducer;
