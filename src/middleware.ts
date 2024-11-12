import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/signup', request.url));
  }

  try {
    const decodedToken: { role: string } = jwtDecode(token);
    const userRole = decodedToken.role;

    // Si el rol es "Patient", permitimos solo la ruta de "/paciente/[id]"
    if (userRole === 'Patient' && pathname.startsWith('/paciente')) {
      return NextResponse.next();
    }

    // Si el rol es "Professional", permitimos solo la ruta de "/professional/[id]"
    if (userRole === 'Professional' && pathname.startsWith('/professional')) {
      return NextResponse.next();
    }

    // Permitir acceso a la ruta de "/professional/[id]" para cualquier usuario logueado
    if (pathname.startsWith('/professional')) {
      return NextResponse.next();
    }

    // Denegamos el acceso si el rol no coincide con la ruta
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  } catch (error) {
    console.error('Error decoding token:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Configuración de las rutas donde aplicar el middleware
export const config = {
  matcher: ['/paciente/:path*', '/professional/:path*'],
};
