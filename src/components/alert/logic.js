import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',
    initialState: { status: false, msg: "" },
    reducers: {
        setAlert(state, action) {
            state.status = action.payload.status;
            state.msg = action.payload.msg;
        }
    }
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;