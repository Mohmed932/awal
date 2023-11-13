import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSimilerNews = createAsyncThunk(
  "similer/getSimilerNews",
  async (id, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/similer/${id}`
      );
      const res = await req.json();
      if (!req.ok) {
        return rejectWithValue(res.message);
      } else {
        return res;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = { similer: null, loading: false, status: false };
const SimilerItems = createSlice({
  name: "similer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSimilerNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSimilerNews.fulfilled, (state, action) => {
      state.loading = false;
      state.similer = action.payload;
    });
    builder.addCase(getSimilerNews.rejected, (state, action) => {
      state.loading = true;
      state.status = true;
    });
  },
});

export default SimilerItems.reducer;
