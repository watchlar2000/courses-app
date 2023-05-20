import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';
import { HttpAuthService } from '../Auth/authService';

vi.mock('axios');

describe('AuthService', () => {
  it('makes a GET request to fetch the bearer token', async () => {
    const mockAuthService = new HttpAuthService(axios);
    axios.get.mockResolvedValueOnce({ data: { token: 'mockedToken' } });
    const result = await mockAuthService.getToken();

    expect(result).toBe('mockedToken');
  });
});
