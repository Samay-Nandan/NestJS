import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@src/store/action';
import { AdminDto } from '@src/store/dto';
import { DefaultAdmin } from '@src/constant';
import { setAdminCookie } from '@src/utils';

interface AdminState {
  loading: boolean;
  admin: AdminDto;
  error: string;
}

const initialState: AdminState = {
  loading: true,
  admin: DefaultAdmin,
  error: '',
};

const Admin = createSlice({
  name: 'Admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = typeof payload === 'string' ? payload : '';
      state.admin =
        typeof payload !== 'string' ? (payload as AdminDto) : DefaultAdmin;
      setAdminCookie(JSON.stringify(state.admin));
    });
  },
});

export const AdminReducer = Admin.reducer;
