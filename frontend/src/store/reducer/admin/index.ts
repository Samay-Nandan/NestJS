import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@src/store/action';
import { AdminDto } from '@src/store/dto';
import { DefaultAdmin } from '@src/constant';
import { setAdminCookie } from '@src/utils';

interface AdminState {
  loading: boolean;
  admin: AdminDto;
}

const initialState: AdminState = {
  loading: true,
  admin: DefaultAdmin,
};

const Admin = createSlice({
  name: 'Admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.admin =
        typeof payload !== 'string' ? (payload as AdminDto) : DefaultAdmin;
      setAdminCookie(state.admin);
    });
  },
});

export const AdminReducer = Admin.reducer;
