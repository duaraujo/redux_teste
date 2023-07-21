import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "countSlice",
    initialState: {
        value: 1,
    },

    reducers: {
        increment(state) {
            state.value +=1;
        },
    },
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;