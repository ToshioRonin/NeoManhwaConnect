export type Role = 'USER' | 'AUTHOR' | 'ARTIST' | 'TRANSLATOR' | 'SCAN' | 'ADMIN';

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export interface User {
  id: string;
  username: string;
  email: string;
  phone?: string;
  role: Role;
  gender: Gender;
  nationality: string;
  languages: string[];
  avatarUrl?: string;
  bio?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  badges?: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  awardedAt?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  phone: string;
  password: string;
  gender: Gender;
  nationality: string;
  languages: string[];
  role?: Role;
}

export interface ProfileUpdateData {
  username?: string;
  bio?: string;
  nationality?: string;
  languages?: string[];
  avatarUrl?: string;
}