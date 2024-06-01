import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    isMenuOpen: boolean;
}

const initialState: UserState = {
    isMenuOpen: true,
};

const handleDashboardMenu = createSlice({
    name: 'handleDashboardMenu',
    initialState,
    reducers: {
        setIsMenuOpen(state, action: PayloadAction<boolean>) {
            state.isMenuOpen = action.payload;
        },
    },
});

export const { setIsMenuOpen } = handleDashboardMenu.actions;

export default handleDashboardMenu.reducer;
