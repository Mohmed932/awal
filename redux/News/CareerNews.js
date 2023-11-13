import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const CareerNewsData = createAsyncThunk(
  "Career/CareerNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/career?page=${count}&limit=7`
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
export const CareerNewsViews = createAsyncThunk(
  "Career/CareerNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/career/views");
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
  CareerNews: null,
  loading: false,
  status: false,
  CareerViews: null,
  CareerViewsloading: false,
  CareerViewsstatus: false,
  totalPage: null,
};

const getCareerNews = createSlice({
  name: "Career",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CareerNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(CareerNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.CareerNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(CareerNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(CareerNewsViews.pending, (state, action) => {
        state.CareerViewsloading = true;
      })
      .addCase(CareerNewsViews.fulfilled, (state, action) => {
        state.CareerViewsloading = false;
        state.CareerViews = action.payload;
      })
      .addCase(CareerNewsViews.rejected, (state, action) => {
        state.CareerViewsloading = false;
        state.CareerViewsstatus = true;
      });
  },
});

export default getCareerNews.reducer;
