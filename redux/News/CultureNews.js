import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const CultureNewsData = createAsyncThunk(
  "Culture/CultureNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/culture?page=${count}&limit=7`
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
export const CultureNewsViews = createAsyncThunk(
  "Culture/CultureNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/culture/views");
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
  CultureNews: null,
  loading: false,
  status: false,
  CultureViews: null,
  CultureViewsloading: false,
  CultureViewsstatus: false,
  totalPage: null,
};

const getCultureNews = createSlice({
  name: "Culture",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CultureNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(CultureNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.CultureNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(CultureNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(CultureNewsViews.pending, (state, action) => {
        state.CultureViewsloading = true;
      })
      .addCase(CultureNewsViews.fulfilled, (state, action) => {
        state.CultureViewsloading = false;
        state.CultureViews = action.payload;
      })
      .addCase(CultureNewsViews.rejected, (state, action) => {
        state.CultureViewsloading = false;
        state.CultureViewsstatus = true;
      });
  },
});

export default getCultureNews.reducer;
