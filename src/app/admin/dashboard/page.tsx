"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { BlogAnalytics } from "@/components/blog-analytics";
import Link from "next/link";
import Image from "next/image";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
  });
  const router = useRouter();

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      router.push("/admin");
      return;
    }

    setUser(session.user);
    await loadStats();
    setLoading(false);
  };

  const loadStats = async () => {
    // Total de posts
    const { count: total } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true });

    // Posts publicados
    const { count: published } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true })
      .eq("is_published", true);

    // Rascunhos
    const { count: drafts } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true })
      .eq("is_published", false);

    setStats({
      total: total || 0,
      published: published || 0,
      drafts: drafts || 0,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F5FF]">
        <p className="text-[#5C5C73]">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5FF]">
      {/* Header */}
      <header className="border-b border-[#6841FA]/20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logos/recompraai.svg"
                alt="RecompraAI"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <h1 className="text-2xl font-bold text-[#2C216F]">
                Admin - Blog
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#5C5C73]">
                {user?.email}
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-[#6841FA] text-[#6841FA] hover:bg-[#6841FA]/10"
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card: Posts */}
          <Link
            href="/admin/dashboard/posts"
            className="group rounded-xl border-2 border-[#6841FA]/20 bg-white p-6 transition hover:border-[#6841FA] hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
              <svg
                className="h-6 w-6 text-[#6841FA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-[#2C216F]">
              Posts
            </h2>
            <p className="text-sm text-[#5C5C73]">
              Gerenciar artigos do blog
            </p>
          </Link>

          {/* Card: Categorias */}
          <Link
            href="/admin/dashboard/categories"
            className="group rounded-xl border-2 border-[#6841FA]/20 bg-white p-6 transition hover:border-[#6841FA] hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
              <svg
                className="h-6 w-6 text-[#6841FA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-[#2C216F]">
              Categorias
            </h2>
            <p className="text-sm text-[#5C5C73]">
              Organizar posts por categoria
            </p>
          </Link>

          {/* Card: Autores */}
          <Link
            href="/admin/dashboard/authors"
            className="group rounded-xl border-2 border-[#6841FA]/20 bg-white p-6 transition hover:border-[#6841FA] hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
              <svg
                className="h-6 w-6 text-[#6841FA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-[#2C216F]">
              Autores
            </h2>
            <p className="text-sm text-[#5C5C73]">
              Gerenciar autores dos posts
            </p>
          </Link>

          {/* Card: Ver Site */}
          <Link
            href="/blog"
            target="_blank"
            className="group rounded-xl border-2 border-[#6841FA]/20 bg-white p-6 transition hover:border-[#6841FA] hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
              <svg
                className="h-6 w-6 text-[#6841FA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-[#2C216F]">
              Ver Blog
            </h2>
            <p className="text-sm text-[#5C5C73]">
              Visualizar blog público
            </p>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
            <p className="text-sm font-medium text-[#5C5C73]">Total de Posts</p>
            <p className="mt-2 text-3xl font-bold text-[#2C216F]">{stats.total}</p>
          </div>
          <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
            <p className="text-sm font-medium text-[#5C5C73]">Publicados</p>
            <p className="mt-2 text-3xl font-bold text-[#2C216F]">{stats.published}</p>
          </div>
          <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
            <p className="text-sm font-medium text-[#5C5C73]">Rascunhos</p>
            <p className="mt-2 text-3xl font-bold text-[#2C216F]">{stats.drafts}</p>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-8">
          <h2 className="mb-6 text-2xl font-bold text-[#2C216F]">Analytics do Blog</h2>
          <BlogAnalytics />
        </div>
      </main>
    </div>
  );
}
