import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export default reducer;

export const { setToken } = actions