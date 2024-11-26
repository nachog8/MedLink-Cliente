import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Instagram, type LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  url: string;
}

interface DeveloperCardProps {
  name: string;
  role: string;
  avatarSrc: string;
  description: string;
  skills: string[];
  socialLinks: SocialLink[];
}

export default function CardDeveloper({
  name,
  role,
  avatarSrc,
  description,
  skills,
  socialLinks,
}: DeveloperCardProps) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 z-10 h-[80%] rounded-xl bg-white dark:bg-gray-700" />
      <Card className="relative z-10 flex h-full w-full max-w-md flex-col content-between overflow-visible rounded-xl border-none bg-transparent p-5 shadow-transparent">
        <CardHeader className="relative p-6 pb-24">
          <Avatar className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 transform border-4 border-gray-200 dark:border-gray-700 lg:h-32 lg:w-32">
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="p-6 pt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {name}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{role}</p>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4 rounded-b-xl bg-gray-50 p-6 dark:bg-gray-600">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <link.icon size={24} />
            </a>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
