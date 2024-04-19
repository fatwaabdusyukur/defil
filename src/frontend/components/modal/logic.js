import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { prep } from "../../services/prepocessing.js";

export const fetchPersonalTweet = createAsyncThunk('modal/fetchPersonalTweet', async(tweet, thunkAPI) => {
    try {
        const options = { 
            method: "POST",
            body: new URLSearchParams({
                text: prep(tweet),
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
         };
         
        const response = await fetch('http://127.0.0.1:5000/predict', options);
        const data = await response.json();

        return { tweet: tweet, category: data };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

const modalSlice = createSlice({
    name: 'modal',
    initialState: { status: false, prediction: { tweet: "", category: "" } },
    reducers: {
        closeModal(state) {
            state.status = false;
            state.prediction.tweet = "";
            state.prediction.category = "";
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPersonalTweet.fulfilled, (state, action) => {
            state.status = true;
            state.prediction.tweet = action.payload.tweet;
            state.prediction.category = action.payload.category;
        });
        builder.addCase(fetchPersonalTweet.rejected, (state, action) => {
            console.error(action.payload);
        })
    }
});

export const { closeModal } = modalSlice.actions;
export default modalSlice.reducer;