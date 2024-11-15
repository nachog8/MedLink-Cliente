interface Props {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;

  contactText: string;
}

export const ContactInfo = ({
  icon: Icon,
  title,
  description,

  contactText,
}: Props) => {
  return (
    <article className="flex max-w-64 flex-col items-center gap-4 text-center text-white">
      <div className="rounded-full border-2 border-white p-4">
        <Icon className="h-8 w-8" />
      </div>
      <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
      <p className="max-w-[250px] text-sm leading-relaxed">{description}</p>

      <p className="cursor-pointer text-lg font-medium transition-colors hover:text-blue-600">
        {contactText}
      </p>
    </article>
  );
};
