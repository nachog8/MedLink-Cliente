import { AuthState, User } from '../types/auth';
import { createJSONStorage, persist } from 'zustand/middleware';

import { create } from 'zustand';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      //estado inicial
      token: null,
      user: null,
      isAuthenticated: false,
      //funciones
      setAuth: (token: string, user: User) => {
        //indica que el usuario se autentico
        set({
          token,
          user,
          isAuthenticated: true,
        });
      },
      logout: () => {
        //limpia los datos de autentication
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
