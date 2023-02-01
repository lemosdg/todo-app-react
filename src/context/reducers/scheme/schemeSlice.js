import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const schemeSlice = createSlice({
  name: "scheme",
  initialState,
  reducers: {
    setScheme: (state, scheme) => {
      state.value = scheme.payload;
    },
  },
});

export const { setScheme } = schemeSlice.actions;

export default schemeSlice.reducer;
