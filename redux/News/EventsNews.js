import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const EventsNewsData = createAsyncThunk(
  "Events/EventsNewsData",
  async (count, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/events?page=${count}&limit=7`
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
export const EventsNewsViews = createAsyncThunk(
  "Events/EventsNewsViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(
        "https://serverawalbawl.vercel.app/news/events/views"
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
  EventsNews: null,
  loading: false,
  status: false,
  EventsViews: null,
  EventsViewsloading: false,
  EventsViewsstatus: false,
  totalPage: null,
};

const getEventsNews = createSlice({
  name: "Events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(EventsNewsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(EventsNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.EventsNews = action.payload.newsData;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(EventsNewsData.rejected, (state, action) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(EventsNewsViews.pending, (state, action) => {
        state.EventsViewsloading = true;
      })
      .addCase(EventsNewsViews.fulfilled, (state, action) => {
        state.EventsViewsloading = false;
        state.EventsViews = action.payload;
      })
      .addCase(EventsNewsViews.rejected, (state, action) => {
        state.EventsViewsloading = false;
        state.EventsViewsstatus = true;
      });
  },
});

export default getEventsNews.reducer;
