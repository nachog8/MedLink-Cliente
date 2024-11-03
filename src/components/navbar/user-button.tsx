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
        <CircleUserRound className="h-7 w-7 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 font-poppins" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link href="/signup" className="flex items-center">
            <span>Iniciar sesión</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
