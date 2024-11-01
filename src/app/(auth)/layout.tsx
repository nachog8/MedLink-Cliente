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
    <div className="relative flex min-h-screen w-full items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        src={'/images/fondo.jpg'}
        width={5000}
        height={3750}
        alt={'fondo'}
        className="absolute inset-0 h-screen w-screen object-cover"
      />

      {/* Contenido centrado */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
