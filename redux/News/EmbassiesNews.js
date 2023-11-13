import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const EmbassiesNewsData = createAsyncThunk(
  "Embassies/EmbassiesNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/embassies?page=${count}&limit=7`
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
export const EmbassiesNewsViews = createAsyncThunk(
  "Embassies/EmbassiesNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("https://serverawalbawl.vercel.app/news/embassies/views");
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
  EmbassiesNews: null,
  loading: false,
  status: false,
  EmbassiesViews: null,
  EmbassiesViewsloading: false,
  EmbassiesViewsstatus: false,
  totalPage: null,
};

const getEmbassiesNews = createSlice({
  name: "Embassies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(EmbassiesNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(EmbassiesNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.EmbassiesNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(EmbassiesNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(EmbassiesNewsViews.pending, (state, action) => {
        state.EmbassiesViewsloading = true;
      })
      .addCase(EmbassiesNewsViews.fulfilled, (state, action) => {
        state.EmbassiesViewsloading = false;
        state.EmbassiesViews = action.payload;
      })
      .addCase(EmbassiesNewsViews.rejected, (state, action) => {
        state.EmbassiesViewsloading = false;
        state.EmbassiesViewsstatus = true;
      });
  },
});

export default getEmbassiesNews.reducer;
