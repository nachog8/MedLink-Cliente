import Link from 'next/link';

interface FooterSectionProps {
  title: string;
  links: { href: string; label: string }[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-center md:gap-4 md:space-y-0">
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link
            href={href}
            className="md:text-md text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
