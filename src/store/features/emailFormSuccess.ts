import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'emailFormSuccess',
  initialState: false,
  reducers: {
    changeStatus: (state: boolean, { payload }: PayloadAction<boolean>) => payload
  }
})

export default reducer;
export const { changeStatus } = actions;