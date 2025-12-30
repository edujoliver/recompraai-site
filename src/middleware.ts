import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({
    request: {
      headers: new Headers(req.headers)
    }
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return req.cookies.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        res.cookies.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        res.cookies.set({ name, value: '', ...options })
      }
    }
  })

  try {
    // Obter sessão atual do Supabase
    const {
      data: { session },
      error
    } = await supabase.auth.getSession()

    // Se há erro de refresh token, considerar como não autenticado
    if (error && error.message.includes('refresh_token_not_found')) {
      console.warn('Middleware: Refresh token expirado')
      // Limpar cookies inválidos
      await supabase.auth.signOut()
    }

    const pathname = req.nextUrl.pathname

    // 🔐 Proteger /admin/dashboard - verificar autenticação E permissão admin
    if (pathname.startsWith('/admin/dashboard')) {
      // Se não tem sessão, redirecionar para login
      if (!session || error) {
        return NextResponse.redirect(new URL('/admin', req.url))
      }

      // Verificar se usuário está na tabela admin_users
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', session.user.id)
        .single()

      // Debug log detalhado
      console.log('🔐 Admin Check:', {
        path: pathname,
        userId: session.user.id,
        email: session.user.email,
        adminUser,
        adminError: adminError ? {
          message: adminError.message,
          code: adminError.code,
          details: adminError.details,
          hint: adminError.hint
        } : null
      })

      // Se não é admin, deslogar e redirecionar
      if (adminError || !adminUser) {
        console.error('❌ Acesso negado:', {
          reason: adminError ? 'Query error' : 'No admin user found',
          error: adminError
        })
        await supabase.auth.signOut()
        return NextResponse.redirect(new URL('/admin?error=unauthorized', req.url))
      }
      
      console.log('✅ Admin autorizado:', adminUser.role)
    }

    // 🔄 Evitar acessar /admin se já logado e verificar se é admin
    if (session && !error && pathname === '/admin') {
      // Verificar se usuário está na tabela admin_users
      const { data: adminUser } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', session.user.id)
        .single()

      // Se é admin, redirecionar para dashboard
      if (adminUser) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url))
      }
    }

    // Headers de performance e segurança
    res.headers.set('X-DNS-Prefetch-Control', 'on')
    res.headers.set('X-Frame-Options', 'SAMEORIGIN')
    res.headers.set('X-Content-Type-Options', 'nosniff')
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    
    // Strict-Transport-Security (HSTS)
    if (process.env.NODE_ENV === 'production') {
      res.headers.set(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload'
      )
    }

    // Permissions Policy
    res.headers.set(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=()'
    )

    return res
  } catch (error) {
    // Em caso de erro, permitir o acesso (fail-safe)
    console.error('Middleware error:', error)
    return res
  }
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*']
}
