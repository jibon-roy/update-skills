import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authReducer';
import handleDashboardMenuReducer from '../slices/handleDashboardMenu';


const store = configureStore({
    reducer: {
        auth: authReducer,
        handleDashboardMenu: handleDashboardMenuReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
