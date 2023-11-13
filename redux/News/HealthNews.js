import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const HealthNewsData = createAsyncThunk(
  "Health/HealthNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/Health?page=${count}&limit=7`
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
export const HealthNewsViews = createAsyncThunk(
  "Health/HealthNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/Health/views");
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
  HealthNews: null,
  loading: false,
  status: false,
  HealthViews: null,
  HealthViewsloading: false,
  HealthViewsstatus: false,
  totalPage: null,
};

const getHealthNews = createSlice({
  name: "Health",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(HealthNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(HealthNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.HealthNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(HealthNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(HealthNewsViews.pending, (state, action) => {
        state.HealthViewsloading = true;
      })
      .addCase(HealthNewsViews.fulfilled, (state, action) => {
        state.HealthViewsloading = false;
        state.HealthViews = action.payload;
      })
      .addCase(HealthNewsViews.rejected, (state, action) => {
        state.HealthViewsloading = false;
        state.HealthViewsstatus = true;
      });
  },
});

export default getHealthNews.reducer;
