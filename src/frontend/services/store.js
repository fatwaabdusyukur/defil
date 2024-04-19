import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import modalReducer from "../components/modal/logic";
import alertReducer from "../components/alert/logic";


export const store = configureStore({
    reducer: {
        modal: modalReducer,
        alert: alertReducer
    },
    middleware: () => [thunk]
});