'use client';

import { CircleUserRound, LayoutDashboard, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { useAuth } from '@/context/auth-context';

export function UserButton() {
  const { isAuthenticated, logout, user } = useAuth();

  const profileUrl = user
    ? user.role === 'Patient'
      ? `/paciente/${user.id}`
      : user.role === 'Doctor'
        ? `/professional/${user.id}`
        : null
    : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircleUserRound className="h-7 w-7 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 font-poppins" align="end" forceMount>
        <DropdownMenuLabel className="text-center">
          ¡Bienvenido!
        </DropdownMenuLabel>
        {isAuthenticated ? (
          <>
            {profileUrl && (
              <DropdownMenuItem asChild>
                <Link href={profileUrl} className="flex items-center">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="flex items-center text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <Link href="/signup" className="flex items-center">
              <span>Iniciar sesión</span>
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
