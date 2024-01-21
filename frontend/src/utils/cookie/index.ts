import JsCookies from 'js-cookie';

export const getAdminCookie = () => JSON.parse(JsCookies.get('admin') ?? '{}');

export const setAdminCookie = (payload: string) =>
  JsCookies.set('admin', payload);

export const getUserCookie = () => JSON.parse(JsCookies.get('user') ?? '{}');

export const setUserCookie = (payload: string) =>
  JsCookies.set('user', payload);
