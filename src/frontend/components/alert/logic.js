import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',
    initialState: { status: false, msg: "" },
    reducers: {
        openAlert(state, action) {
            state.status = true;
            state.msg = action.payload;
        },
        closeAlert(state) {
            state.status = false;
            state.msg = "";
        }
    }
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;