import type { AxiosInstance } from 'axios';
import { getTokenFromLocalStorage, setTokenToLocalStorage } from './Lib/storage';

export interface AuthService {
  getToken(): Promise<string>;
  isUserLoggedIn(): Promise<boolean>;
  getAuthenticatedHttpClient(): AxiosInstance;
}

const { VITE_APP_AUTH_URL } = import.meta.env;

export class HttpAuthService implements AuthService {
  constructor(private httpClient: AxiosInstance) {}

  async getToken(): Promise<string> {
    try {
      const { data } = await this.httpClient.get(VITE_APP_AUTH_URL);
      return data.token;
    } catch (error) {
      console.error('Failed to fetch token:', error);
      throw error;
    }
  }

  async isUserLoggedIn(): Promise<boolean> {
    try {
      const bearerToken = getTokenFromLocalStorage();

      if (!bearerToken) {
        const token = await this.getToken();
        setTokenToLocalStorage(token);
      }

      return true;
    } catch (e) {
      return false;
    }
  }

  getAuthenticatedHttpClient(): AxiosInstance {
    const bearerToken = getTokenFromLocalStorage();

    if (bearerToken) {
      const authenticatedHttpClient = this.httpClient;
      authenticatedHttpClient.defaults.headers.common.Authorization = `Bearer ${bearerToken}`;
      return authenticatedHttpClient;
    }

    return this.httpClient;
  }
}
