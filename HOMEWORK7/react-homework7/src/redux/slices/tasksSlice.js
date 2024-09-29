import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../../data/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',
    async () => 
    {
        const response = new Promise((resolve) => {
            setTimeout(() => {
                // console.log(tasks);
                resolve(tasks);
            }, 3000);
        });
        return response;
    });

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'succeeded';
            });
    },
});

export default tasksSlice.reducer;