'use client';

import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import { User } from '@/interfaces/auth';
import { authService } from '../services/auth-service';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const { getUserData } = authService;

interface DecodedToken {
  id: string;
  role: string;
  exp?: number;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: DecodedToken | null;
  profile: User | null;
  loading: boolean;
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [profile, setProfile] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loadProfile = useCallback(async () => {
    if (!user || !token) return;

    try {
      const { payload } = await getUserData(user.role, user.id, token);
      setProfile(payload);
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  }, [user, token]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    setProfile(null);
    setToken(null);
    Cookies.remove('token');
    router.push('/signup');
  }, [router]);

  const checkTokenExpiration = useCallback(
    (decodedToken: DecodedToken) => {
      if (decodedToken.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp <= currentTime) {
          logout();
          return false;
        }

        const timeUntilExpiry = (decodedToken.exp - currentTime) * 1000;
        setTimeout(logout, timeUntilExpiry);
      }
      return true;
    },
    [logout]
  );

  const login = (newToken: string) => {
    const decodedUser: DecodedToken = jwtDecode(newToken);

    if (checkTokenExpiration(decodedUser)) {
      Cookies.set('token', newToken, {
        expires: 1 / 24,
        path: '/',
        sameSite: 'Lax',
      });
      setUser(decodedUser);
      setIsAuthenticated(true);
      setToken(newToken);
      router.push('/');
    }
  };

  useEffect(() => {
    const storedToken = Cookies.get('token');

    if (storedToken) {
      try {
        const decodedUser: DecodedToken = jwtDecode(storedToken);

        if (checkTokenExpiration(decodedUser)) {
          setIsAuthenticated(true);
          setUser(decodedUser);
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Invalid token:', error);
        logout();
      }
    }

    setLoading(false);
  }, [checkTokenExpiration, logout]);

  useEffect(() => {
    if (user && token) {
      loadProfile();
    }
  }, [user, token, loadProfile]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        profile,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
