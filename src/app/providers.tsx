'use client';

import { useAuthStore } from '@/lib/store/auth-store';
import { useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  //   Hydration fix for Zustand with Next.js
  // En aplicaciones Next.js, puede surgir un problema de "mismatch" (desajuste) entre el estado del servidor y el cliente cuando se utiliza localStorage o sessionStorage. Esto sucede porque el servidor no tiene acceso a estas APIs durante la renderización inicial, y el estado que depende de ellas necesita actualizarse en el cliente.
  // Zustand incluye rehydrate en la función persist para forzar la carga del estado desde el almacenamiento cuando el componente se monta en el cliente.
  useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}
