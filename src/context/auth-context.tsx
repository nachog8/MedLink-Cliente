'use client';

import React, { ReactNode, createContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'; // Corrige importación: jwtDecode no necesita llaves
import { useRouter } from 'next/navigation';

interface DecodedToken {
  id: string;
  role: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: DecodedToken | null;
  // token: string | null;
  loading: boolean;
  login: (newToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<DecodedToken | null>(null);
  // const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = Cookies.get('token');

    if (storedToken) {
      setIsAuthenticated(true);
      const decodedUser: DecodedToken = jwtDecode(storedToken);
      setUser(decodedUser);
      // setToken(storedToken);
    }

    setLoading(false);
  }, []);

  const login = (newToken: string) => {
    Cookies.set('token', newToken, { expires: 7, path: '/', sameSite: 'Lax' });

    const decodedUser: DecodedToken = jwtDecode(newToken);
    setUser(decodedUser);
    // setToken(newToken);
    setIsAuthenticated(true);
    router.push('/');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // setToken(null);
    Cookies.remove('token');
    router.push('/signup');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        // token,
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
