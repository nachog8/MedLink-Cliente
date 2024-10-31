import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

import { Button } from '../ui/button';
import Link from 'next/link';

interface SocialButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon: Icon,
  label,
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-primary/10"
          asChild
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="h-12 w-12" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
