import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SchoolNewsData = createAsyncThunk(
  "School/SchoolNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/school?page=${count}&limit=7`
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
export const SchoolNewsViews = createAsyncThunk(
  "School/SchoolNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/school/views");
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
  SchoolNews: null,
  loading: false,
  status: false,
  SchoolViews: null,
  SchoolViewsloading: false,
  SchoolViewsstatus: false,
  totalPage: null,
};

const getSchoolNews = createSlice({
  name: "School",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SchoolNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SchoolNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.SchoolNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(SchoolNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(SchoolNewsViews.pending, (state, action) => {
        state.SchoolViewsloading = true;
      })
      .addCase(SchoolNewsViews.fulfilled, (state, action) => {
        state.SchoolViewsloading = false;
        state.SchoolViews = action.payload;
      })
      .addCase(SchoolNewsViews.rejected, (state, action) => {
        state.SchoolViewsloading = false;
        state.SchoolViewsstatus = true;
      });
  },
});

export default getSchoolNews.reducer;
