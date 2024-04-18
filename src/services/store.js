import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "../components/modal/logic";

export const store = configureStore({
    reducer: {
        modal: modalReducer
    }
});