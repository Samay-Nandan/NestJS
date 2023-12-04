import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@src/store/action';
import { UserDto } from '@src/store/dto';
import { DefaultUser } from '@src/constant';

interface UserState {
  loading: boolean;
  user: UserDto;
  error: string;
}

const initialState: UserState = {
  loading: true,
  user: DefaultUser,
  error: '',
};

const User = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = typeof payload === 'string' ? payload : '';
      state.user =
        typeof payload !== 'string' ? (payload as UserDto) : DefaultUser;
    });
  },
});

export const UserReducer = User.reducer;
