import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReviews, deleteReview, Review } from '../../services/reviewAPI';
interface ReviewState {
    reviews: Review[];
    loading: boolean;
}
const initialState: ReviewState = {
    reviews: [],
    loading: false,
}

export const getReviews = createAsyncThunk('reviews/getReviews', fetchReviews);
export const removeReview = createAsyncThunk('reviews/deleteReview', deleteReview);

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getReviews.pending, state => { state.loading = true; })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
            });
    }
});
export default reviewsSlice.reducer;