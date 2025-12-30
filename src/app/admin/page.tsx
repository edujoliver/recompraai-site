"use client";

import { useState, useEffect, Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    // Verificar se há erro de autorização na URL
    const errorParam = searchParams.get('error');
    if (errorParam === 'unauthorized') {
      setError('Acesso negado. Você não tem permissão para acessar o painel administrativo.');
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session) {
        // Verificar se usuário está autorizado
        const { data: adminUser, error: adminError } = await supabase
          .from('admin_users')
          .select('role')
          .eq('user_id', data.user.id)
          .single();

        if (adminError || !adminUser) {
          await supabase.auth.signOut();
          setError('Acesso negado. Você não tem permissão para acessar o painel administrativo.');
          setLoading(false);
          return;
        }

        // Force a full page reload to ensure cookies are set properly
        window.location.href = "/admin/dashboard";
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erro ao fazer login";
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6841FA] to-[#2C216F]">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/restaurant.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
            <div>
              <Image
                src="/logos/recompraai.svg"
                alt="RecompraAI"
                width={180}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Gerencie seu Blog
                <br />
                com Facilidade
              </h1>
              <p className="text-lg text-white/80">
                Sistema completo para criar e gerenciar conteúdo do seu blog de
                forma simples e eficiente.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <span>Plataforma segura e confiável</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center bg-white px-6 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="text-center lg:hidden">
            <Image
              src="/logos/recompraai.svg"
              alt="RecompraAI"
              width={120}
              height={40}
              className="mx-auto h-10 w-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2C216F]">
              Login
            </h2>
            <p className="mt-2 text-sm text-[#5C5C73]">
              Faça login para acessar o painel administrativo
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-[#2C216F]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 h-12 rounded-lg border-gray-300 focus:border-[#6841FA] focus:ring-[#6841FA]"
                  placeholder="Enter Email Address"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-[#2C216F]">
                    Password
                  </Label>
                  <button
                    type="button"
                    className="text-sm text-[#6841FA] hover:text-[#5935d9]"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1.5 h-12 rounded-lg border-gray-300 focus:border-[#6841FA] focus:ring-[#6841FA]"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-lg bg-[#6841FA] text-base font-medium hover:bg-[#5935d9]"
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="text-center text-xs text-gray-400">
            © 2025 RecompraAI - Todos os direitos reservados
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div></div>}>
      <AdminLoginForm />
    </Suspense>
  );
}
