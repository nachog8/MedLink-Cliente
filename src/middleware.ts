import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  id: string;
  role: string;
  nbf: number;
  iat: number;
  exp: number;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;
  if (pathname.startsWith('/profesional')) {
    return NextResponse.next();
  }
  // Redirigir al login si no hay token
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decodedToken: DecodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    const userRole = decodedToken.role;

    // Si el usuario es un paciente, permitimos acceso solo a su propio perfil
    if (userRole === 'Patient' && pathname.startsWith('/paciente')) {
      const patientId = pathname.split('/').pop(); // Extraer el ID del paciente desde la URL
      if (patientId === userId) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // Si el usuario es un médico, permitimos acceso a cualquier perfil de paciente
    //TODO: Esto no deberia hacer asi, leuego hay que proteger las rutas
    if (userRole === 'Doctor' && pathname.startsWith('/paciente')) {
      return NextResponse.next();
    }

    // Permitir acceso a la ruta de /profesional para médicos
    // if (userRole === 'Doctor' && pathname.startsWith('/profesional')) {
    //   return NextResponse.next();
    // }

    // Denegamos el acceso si el rol no coincide con la ruta
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  } catch (error) {
    console.error('Error decoding token:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Configuración de las rutas donde aplicar el middleware
export const config = {
  matcher: ['/paciente/:path*', '/profesional/:path*'],
};
