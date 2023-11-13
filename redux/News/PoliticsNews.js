import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const PoliticsNewsData = createAsyncThunk(
  "Politics/PoliticsNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/politics?page=${count}&limit=7`
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
export const PoliticsNewsViews = createAsyncThunk(
  "Politics/PoliticsNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/politics/views"
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
  PoliticsNews: null,
  loading: false,
  status: false,
  PoliticsViews: null,
  PoliticsViewsloading: false,
  PoliticsViewsstatus: false,
  totalPage: null,
};

const getPoliticsNews = createSlice({
  name: "Politics",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(PoliticsNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(PoliticsNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.PoliticsNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(PoliticsNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(PoliticsNewsViews.pending, (state, action) => {
        state.PoliticsViewsloading = true;
      })
      .addCase(PoliticsNewsViews.fulfilled, (state, action) => {
        state.PoliticsViewsloading = false;
        state.PoliticsViews = action.payload;
      })
      .addCase(PoliticsNewsViews.rejected, (state, action) => {
        state.PoliticsViewsloading = false;
        state.PoliticsViewsstatus = true;
      });
  },
});

export default getPoliticsNews.reducer;
