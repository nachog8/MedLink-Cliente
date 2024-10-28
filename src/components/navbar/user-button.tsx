'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function UserButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <CircleUserRound className="h-5 w-5 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-poppins w-40" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link href="/auth/signup" className="flex items-center">
            <span>Iniciar sesión</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
