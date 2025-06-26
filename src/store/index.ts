// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../store/features/userSlice';
import eventsReducer from '../store/features/eventsSlice';
import reviewsReducer from '../store/features/reviewsSlice';
import dashboardReducer from '../store/features/dashboardSlice'
import loginReducer from '../store/features/loginSllice'
import bookingReducer from '../store/features/bookingSlice'
export const store = configureStore({
  reducer: {
    users: usersReducer,
    events: eventsReducer,
    reviews: reviewsReducer,
    stats:dashboardReducer,
    logins:loginReducer,
    bookings:bookingReducer
  },
});

// 👇 Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
