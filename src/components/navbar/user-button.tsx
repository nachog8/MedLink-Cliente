'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CircleUserRound, LayoutDashboard, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/auth-context';

export function UserButton() {
  const { isAuthenticated, logout, profile } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profile?.avatar) {
      setIsLoading(false);
    }
  }, [profile?.avatar]);

  const profileUrl = profile
    ? profile.role === 'Patient'
      ? `/paciente/${profile.id}`
      : profile.role === 'Doctor'
        ? `/profesional/${profile.id}`
        : null
    : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isAuthenticated ? (
          <Avatar className="h-7 w-7 cursor-pointer">
            {isLoading ? (
              <Skeleton className="h-full w-full rounded-full" />
            ) : (
              <>
                <AvatarImage
                  src={`${process.env.NEXT_PUBLIC_URL_BASE_IMAGES}${profile?.avatar}`}
                  alt="User avatar"
                  className="rounded-full border-2 border-sky-300"
                />
                <AvatarFallback>
                  {profile?.firstName ? profile.firstName[0] : 'NN'}
                </AvatarFallback>
              </>
            )}
          </Avatar>
        ) : (
          <CircleUserRound className="h-7 w-7 cursor-pointer" />
        )}
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
            <Link href="/signin" className="flex items-center">
              <span>Iniciar sesión</span>
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
