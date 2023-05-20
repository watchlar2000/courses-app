enum Auth {
  TokenStorageKey = 'authToken',
}

type AuthToken = string | null;

export const getTokenFromLocalStorage = (): AuthToken => {
  return window.localStorage.getItem(Auth.TokenStorageKey) ?? null;
};

export const setTokenToLocalStorage = (token: string): void => {
  window.localStorage.setItem(Auth.TokenStorageKey, token);
};
