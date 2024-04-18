import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: { status: false, msg: "" },
    reducers: {
        setModal(state, action) {
            state.status = action.payload.status;
            state.msg = action.payload.msg;
        }
    }
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;