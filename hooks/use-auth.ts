import { useAuthStore, hasRole, canPublish } from '../stores/auth-store';
import type { Role } from '../types/user';

export const useAuth = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    fetchProfile,
    updateProfile,
    clearError,
  } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    fetchProfile,
    updateProfile,
    clearError,
    hasRole: (roles: Role[]) => hasRole(user, roles),
    canPublish: () => canPublish(user),
    isAdmin: () => hasRole(user, ['ADMIN']),
    isCreator: () => hasRole(user, ['AUTHOR', 'ARTIST', 'TRANSLATOR', 'SCAN']),
  };
};

export const useUser = () => {
  const { user, isAuthenticated } = useAuthStore();
  return { user, isAuthenticated };
};