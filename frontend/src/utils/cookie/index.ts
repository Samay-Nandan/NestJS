import JsCookies from 'js-cookie';
import { adminCookie, userCookie } from '@src/constant';

type CookiePayload = Record<string, unknown>;

const JsCookiesConfig = { path: '/' };

const getCookie = (name: string) => JSON.parse(JsCookies.get(name) ?? '{}');

const setCookie = (name: string, payload: CookiePayload) =>
  JsCookies.set(name, JSON.stringify(payload), JsCookiesConfig);

const removeCookie = (name: string) => JsCookies.remove(name, JsCookiesConfig);

export const getAdminCookie = () => getCookie(adminCookie);

export const setAdminCookie = (payload: CookiePayload) =>
  setCookie(adminCookie, payload);

export const removeAdminCookie = () => removeCookie(adminCookie);

export const getUserCookie = () => getCookie(userCookie);

export const setUserCookie = (payload: CookiePayload) =>
  setCookie(userCookie, payload);

export const removeUserCookie = () => removeCookie(userCookie);
