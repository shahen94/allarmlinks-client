import { createSlice, PayloadAction } from '@reduxjs/toolkit'



type formValues = {
  name: string;
  surname: string;
  email: string;
};



const { reducer, actions } = createSlice({
  name: 'formData',
  initialState: {
    name: '',
    surname: '',
    email: '',
  },
  reducers: {
    setEmailData: (state, { payload }: PayloadAction<formValues>) => payload
  }
})




export default reducer;

export const { setEmailData } = actions