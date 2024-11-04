import './globals.css';

import Footer from '@/components/footer';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import { Poppins } from '@next/font/google';
import { Toaster } from '@/components/ui/toaster';
// import { AuthProvider } from '@/context/auth-context';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});
export const metadata: Metadata = {
  title: 'MedLink',
  description:
    'MedLink ofrece servicios médicos de calidad, accesibles y personalizados, cuidando tu salud con excelencia y compromiso.',
  keywords:
    'salud, medicina, servicios médicos, cuidado de la salud, atención médica, MedLink',
  icons: {
    icon: [{ url: '/images/logo/MEDLINK_LOGO-02.ico', sizes: '40x40' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {/* Fijarse luego si necesita de un flex-grow */}
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
