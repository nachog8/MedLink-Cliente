'use client';

import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

interface DecodedToken {
  id: string;
  role: string;
  exp?: number;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: DecodedToken | null;
  loading: boolean;
  login: (newToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
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
        }
      } catch (error) {
        console.error('Invalid token:', error);
        logout();
      }
    }

    setLoading(false);
  }, [checkTokenExpiration, logout]);

  useEffect(() => {
    if (isAuthenticated) {
      const intervalId = setInterval(() => {
        const storedToken = Cookies.get('token');
        if (storedToken) {
          try {
            const decodedUser: DecodedToken = jwtDecode(storedToken);
            checkTokenExpiration(decodedUser);
          } catch (error) {
            console.error('Token validation error:', error);
            logout();
          }
        } else {
          logout();
        }
      }, 600000);

      return () => clearInterval(intervalId);
    }
  }, [isAuthenticated, checkTokenExpiration, logout]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
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
