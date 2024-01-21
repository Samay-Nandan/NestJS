import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpRequest, UserURL, RequestMethod } from '@src/utils';
import { LOGIN_USER } from '@src/store/types';

export const loginUser = createAsyncThunk(LOGIN_USER, (body: unknown) => {
  return HttpRequest({
    url: `${UserURL}/login`,
    method: RequestMethod.POST,
    body,
  });
});
