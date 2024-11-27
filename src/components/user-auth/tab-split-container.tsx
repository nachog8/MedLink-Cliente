import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import React, { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

interface SplitContainerProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageUrl: string;
  imageAlt: string;
  formComponent: ReactNode;
}

export function TabSplitContainer({
  title,
  description,
  icon: Icon,
  imageUrl,
  imageAlt,
  formComponent,
}: SplitContainerProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
      {/* Left Side - Card */}
      <div className="flex items-center justify-center">
        <Card className="h-full w-full max-w-lg transform rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              {Icon && <Icon className="h-6 w-6" />}
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
            <Separator />
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full p-4">
              {formComponent}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <p className="w-full text-center text-sm text-blue-600 text-muted-foreground">
              Ya tienes una cuenta?
              <Link
                href="/signin"
                className="mx-4 font-medium text-primary hover:underline"
                prefetch={false}
              >
                Inicio de Sesión
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Right Side - Form */}

      <div className="hidden rounded-2xl bg-white lg:block">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            className="object-contain object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
