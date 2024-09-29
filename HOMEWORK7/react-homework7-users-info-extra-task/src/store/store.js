import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';
import { loggerMiddleWare } from './loggerMiddleWare';
import specificUserReducer from './specificUserReducer';

const store = configureStore({
    reducer: {
        users: usersReducer,
        specificUser: specificUserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
});

export default store;