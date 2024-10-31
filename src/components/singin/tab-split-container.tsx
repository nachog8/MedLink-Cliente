import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import React, { ReactNode } from 'react';

import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

interface SplitContainerProps {
  title: string;
  description: string;
  icon: LucideIcon;
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
    <div className="flex flex-col lg:flex-row">
      {/* Left Side - Card */}

      <Card className="group relative overflow-hidden transition-shadow duration-300 hover:shadow-xl lg:max-w-md">
        <CardHeader className="space-y-5 pb-2 text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Icon className="h-6 w-6" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[350px] w-full p-5">
            {formComponent}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Right Side - Form */}

      <div className="p-8">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={500}
          className="objetc-cover h-full object-center p-6"
        />
      </div>
    </div>
  );
}
