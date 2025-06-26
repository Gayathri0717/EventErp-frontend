import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStats } from '../../services/statsAPI';
export interface StatsState {
    users:number;
    events:number;
    reviews:number;
    loading:boolean;
    Bookings:number;
}

const initialState: StatsState = {
    users:0,
    events:0,
    reviews:0,
    Bookings:0,
    loading: false,
}

export const getStats = createAsyncThunk('stats/getStats', fetchStats);

const dashboardslice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getStats.pending, state => { state.loading = true; })
            .addCase(getStats.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users;
                state.events = action.payload.events;
                state.reviews = action.payload.reviews;
                state.Bookings = action.payload.Bookings;
            });
    }
});
export default dashboardslice.reducer;