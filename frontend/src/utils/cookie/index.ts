import JsCookies from 'js-cookie';
import { Cookies } from '@src/constant';

const { admin, user } = Cookies;

type CookiePayload = Record<string, unknown>;

const JsCookiesConfig = { path: '/' };

const getCookie = (name: string) => JSON.parse(JsCookies.get(name) ?? '{}');

const setCookie = (name: string, payload: CookiePayload) =>
  JsCookies.set(name, JSON.stringify(payload), JsCookiesConfig);

const removeCookie = (name: string) => JsCookies.remove(name, JsCookiesConfig);

export const getAdminCookie = () => getCookie(admin);

export const setAdminCookie = (payload: CookiePayload) =>
  setCookie(admin, payload);

export const removeAdminCookie = () => removeCookie(admin);

export const getUserCookie = () => getCookie(user);

export const setUserCookie = (payload: CookiePayload) =>
  setCookie(user, payload);

export const removeUserCookie = () => removeCookie(user);
