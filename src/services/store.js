import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "../components/modal/logic";
import alertReducer from "../components/alert/logic";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        alert: alertReducer
    }
});