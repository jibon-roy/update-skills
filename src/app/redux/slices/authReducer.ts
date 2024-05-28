import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: {
      email: string;
      name: string;
    } | null;
}

const initialState: UserState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ name: string; email: string }>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
