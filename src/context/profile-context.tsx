'use client';

import React, { ReactNode, createContext, useState } from 'react';

import Cookies from 'js-cookie';
import { User } from '@/interfaces/auth';
import { authService } from '../services/auth-service';
import { useRouter } from 'next/navigation';

const { getUserData } = authService;
interface ProfileContextProps {
  visitedProfile: User | null;
  loadVisitedProfile: (id: string, role: string) => Promise<void>;
  clearVisitedProfile: () => void;
  loading: boolean;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [visitedProfile, setVisitedProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  /**
   * Carga los datos del perfil del usuario visitado.
   * @param id - ID del usuario a cargar.
   * @param role - Rol del usuario a cargar.
   */
  const loadVisitedProfile = async (id: string, role: string) => {
    setVisitedProfile(null);
    setLoading(true);
    try {
      const token = Cookies.get('token');
      if (!token) {
        console.warn('El token no está disponible. Verifica la autenticación.');
        return;
      }
      const { payload } = await getUserData(role, id, token);
      setVisitedProfile(payload);
    } catch (error) {
      console.error('Error cargando el perfil visitado:', error);
      setVisitedProfile(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Limpia el estado del perfil visitado (cuando el usuario cambia de página, por ejemplo).
   */
  const clearVisitedProfile = () => {
    setVisitedProfile(null);
  };

  return (
    <ProfileContext.Provider
      value={{
        visitedProfile,
        loadVisitedProfile,
        clearVisitedProfile,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error(
      'useProfile debe ser utilizado dentro de un ProfileProvider'
    );
  }
  return context;
};
