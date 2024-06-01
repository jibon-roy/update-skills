import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    isOpen: boolean
}

const initialState: UserState = {
    isOpen: true,
};

const handleDashboardMenu = createSlice({
    name: 'handleDashboardMenu',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        }
    },
});

export const { setIsOpen } = handleDashboardMenu.actions;

export default handleDashboardMenu.reducer;
