import api, { setAccessToken } from './api';
import type {
  User,
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  ProfileUpdateData,
} from '../types/user';

export const authService = {
  register: async (data: RegisterCredentials): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data);
    const { accessToken, user } = response.data;
    setAccessToken(accessToken);
    return response.data;
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    const { accessToken, user } = response.data;
    setAccessToken(accessToken);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
    setAccessToken(null);
  },

  refreshToken: async (): Promise<{ accessToken: string }> => {
    const response = await api.post('/auth/refresh');
    const { accessToken } = response.data;
    setAccessToken(accessToken);
    return response.data;
  },

  getProfile: async (username: string): Promise<User> => {
    const response = await api.get(`/auth/profile/${username}`);
    return response.data;
  },

  getMyProfile: async (): Promise<User> => {
    const response = await api.get('/auth/profile/me');
    return response.data;
  },

  updateProfile: async (data: ProfileUpdateData): Promise<User> => {
    const response = await api.put('/auth/profile/me', data);
    return response.data;
  },

  uploadAvatar: async (file: File): Promise<{ avatarUrl: string }> => {
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await api.post('/auth/profile/me/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  getAllUsers: async (): Promise<User[]> => {
    const response = await api.get('/admin/users');
    return response.data;
  },

  updateUserRole: async (userId: string, role: string): Promise<User> => {
    const response = await api.put(`/admin/users/${userId}/role`, { role });
    return response.data;
  },
};