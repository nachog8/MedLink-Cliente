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

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  try {
    const decodedToken: DecodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    const userRole = decodedToken.role;

    if (pathname.startsWith('/paciente')) {
      if (userRole === 'Patient') {
        const patientId = pathname.split('/').pop();
        if (patientId === userId) {
          return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/no-autorizado', request.url));
      }

      if (userRole === 'Doctor') {
        return NextResponse.next();
      }

      return NextResponse.redirect(new URL('/no-autorizado', request.url));
    }

    if (pathname.startsWith('/profesional')) {
      if (userRole === 'Doctor' || userRole === 'Patient') {
        return NextResponse.next();
      }

      return NextResponse.redirect(new URL('/no-autorizado', request.url));
    }

    return NextResponse.redirect(new URL('/no-autorizado', request.url));
  } catch (error) {
    console.error('Error decoding token:', error);

    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: ['/paciente/:path*', '/profesional/:path*'],
};
