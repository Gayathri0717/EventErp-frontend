import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEvents, createEvent, deleteEvent, Event } from '../../services/eventAPI';
interface EventState {
  Events: Event[];
  loading: boolean;
}
const initialState: EventState = {
  Events: [],
  loading: false,
}

export const getEvents = createAsyncThunk('events/getEvents', fetchEvents);
export const addEvent = createAsyncThunk('events/addEvent', createEvent);
export const removeEvent = createAsyncThunk('events/deleteEvent', deleteEvent);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEvents.pending, state => { state.loading = true; })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.Events = action.payload;
      })
      .addCase(addEvent.pending, state => { state.loading = true; })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.loading = false;
      state.Events.push(action.payload); // ✅ Adds the new event to the array

      })
        .addCase(removeEvent.pending, state => { state.loading = true; })
      .addCase(removeEvent.fulfilled, (state, action) => {
        state.loading = false;
      state.Events = state.Events.filter(event => event._id !== action.payload);

      // ✅ Adds the new event to the array

      });
  }
});
export default eventsSlice.reducer;