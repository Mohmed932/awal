import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const InvestigationsNewsData = createAsyncThunk(
  "Investigations/InvestigationsNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/investigations?page=${count}&limit=7`
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
export const InvestigationsNewsViews = createAsyncThunk(
  "Investigations/InvestigationsNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/investigations/views"
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
  InvestigationsNews: null,
  loading: false,
  status: false,
  InvestigationsViews: null,
  InvestigationsViewsloading: false,
  InvestigationsViewsstatus: false,
  totalPage: null,
};

const getInvestigationsNews = createSlice({
  name: "Investigations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(InvestigationsNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(InvestigationsNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.InvestigationsNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(InvestigationsNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(InvestigationsNewsViews.pending, (state, action) => {
        state.InvestigationsViewsloading = true;
      })
      .addCase(InvestigationsNewsViews.fulfilled, (state, action) => {
        state.InvestigationsViewsloading = false;
        state.InvestigationsViews = action.payload;
      })
      .addCase(InvestigationsNewsViews.rejected, (state, action) => {
        state.InvestigationsViewsloading = false;
        state.InvestigationsViewsstatus = true;
      });
  },
});

export default getInvestigationsNews.reducer;
