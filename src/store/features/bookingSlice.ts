import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {deleteBookings , fetchBookings, Booking } from '../../services/bookingAPI';
interface BookingState {
    bookings: Booking[];
    loading: boolean;
}
const initialState: BookingState = {
    bookings: [],
    loading: false,
}

export const getBookings = createAsyncThunk('bookings/getBookings', fetchBookings);
export const removeBookings = createAsyncThunk('bookings/removeBookings', deleteBookings);

const bookingSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getBookings.pending, state => { state.loading = true; })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            });
    }
});
export default bookingSlice.reducer;