import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'passCode',
  initialState: '',
  reducers: {
    setPassCode: (state, { payload }: PayloadAction<string>) => payload,
  },
});

export default reducer;

export const { setPassCode } = actions