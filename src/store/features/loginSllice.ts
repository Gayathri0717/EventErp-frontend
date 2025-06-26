import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogin, Login} from '../../services/loginAPI';
export interface LoginState {
    logins: Login | null;
    loading: boolean;
}
const initialState: LoginState = {
    logins: null,
    loading: false,
}

export const postlogin = createAsyncThunk('logins/postlogin', fetchLogin);


const loginSlice = createSlice({
    name: 'logins',
    initialState,   
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(postlogin.pending, state => { state.loading = true; })
            .addCase(postlogin.fulfilled, (state, action) => {
                state.loading = false;
                state.logins = action.payload;
            });
    }
});
export default loginSlice.reducer;