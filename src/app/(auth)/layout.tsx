import Image from 'next/image';

export const metadata = {
  title: 'Authentication',
  description: 'Sign in and sign up pages',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      {/* Contenido centrado */}
      <div className="relative z-10 py-14 font-poppins">{children}</div>
    </div>
  );
}
