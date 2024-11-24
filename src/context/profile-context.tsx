'use client';

import React, { ReactNode, createContext, useState } from 'react';

import { User } from '@/interfaces/auth';
import { authService } from '../services/auth-service'; // Aquí se asume que tienes un servicio para obtener datos.

const { getUserData } = authService; // Función para obtener datos del usuario desde el servidor.

interface ProfileContextProps {
  visitedProfile: User | null; // Datos del perfil visitado
  loadVisitedProfile: (id: string, role: string) => Promise<void>; // Función para cargar datos del perfil visitado.
  clearVisitedProfile: () => void; // Limpiar el estado del perfil visitado.
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [visitedProfile, setVisitedProfile] = useState<User | null>(null);

  /**
   * Carga los datos del perfil del usuario visitado.
   * @param id - ID del usuario a cargar.
   * @param role - Rol del usuario a cargar.
   */
  const loadVisitedProfile = async (id: string, role: string) => {
    try {
      const { payload } = await getUserData(role, id);
      setVisitedProfile(payload); // Guarda los datos en el estado.
    } catch (error) {
      console.error('Error cargando el perfil visitado:', error);
      setVisitedProfile(null); // Limpia el estado en caso de error.
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
