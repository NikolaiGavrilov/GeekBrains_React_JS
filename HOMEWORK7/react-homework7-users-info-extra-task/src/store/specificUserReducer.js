import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchSpecificUser = createAsyncThunk(
    'users/fetchSpecificUser',
    async (userID, thunkApi) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const specificUserSlice = createSlice({
    name: 'specificUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpecificUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSpecificUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; 
            })
            .addCase(fetchSpecificUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { } = specificUserSlice.actions; 
export default specificUserSlice.reducer; 