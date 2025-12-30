"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2, Plus, Eye, EyeOff } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  views: number;
  author: {
    name: string;
  } | null;
}

export default function PostsManagementPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkUserAndLoadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUserAndLoadPosts = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/admin");
      return;
    }

    setUser(session.user);
    await loadPosts();
  };

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(
          `
          id,
          title,
          slug,
          is_published,
          published_at,
          created_at,
          views,
          author:blog_authors(name)
        `
        )
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      // Definir interface para os dados retornados do Supabase
      interface PostData {
        id: string;
        title: string;
        slug: string;
        is_published: boolean;
        published_at: string | null;
        created_at: string;
        views: number;
        author: { name: string }[] | null;
      }
      
      // Corrigir o mapeamento do campo author
      const mappedPosts = (data as PostData[] || []).map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        is_published: post.is_published,
        published_at: post.published_at,
        created_at: post.created_at,
        views: post.views || 0,
        author: Array.isArray(post.author) && post.author.length > 0
          ? { name: post.author[0].name as string }
          : null,
      }));
      setPosts(mappedPosts);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Tem certeza que deseja deletar o post "${title}"?`)) {
      return;
    }

    try {
      // Delete relationships first
      await supabase.from("blog_post_categories").delete().eq("post_id", id);

      // Delete post
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);

      if (error) throw error;

      alert("Post deletado com sucesso!");
      loadPosts();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao deletar post: " + message);
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("blog_posts")
        .update({
          is_published: !currentStatus,
          published_at: !currentStatus ? new Date().toISOString() : null,
        })
        .eq("id", id);

      if (error) throw error;

      alert(
        `Post ${!currentStatus ? "publicado" : "despublicado"} com sucesso!`
      );
      loadPosts();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao atualizar status: " + message);
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F5FF]">
        <p className="text-[#5C5C73]">Carregando posts...</p>
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
              <Link href="/admin/dashboard">
                <Image
                  src="/logos/recompraai.svg"
                  alt="RecompraAI"
                  width={120}
                  height={32}
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
              <h1 className="text-2xl font-bold text-[#2C216F]">
                Gerenciar Posts
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#5C5C73]">{user?.email}</span>
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
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#2C216F]">
              Todos os Posts
            </h2>
            <p className="text-sm text-[#5C5C73]">
              {posts.length} {posts.length === 1 ? "post" : "posts"} no total
            </p>
          </div>
          <Link href="/admin/dashboard/posts/new">
            <Button className="bg-[#6841FA] hover:bg-[#5935d9]">
              <Plus className="mr-2 h-4 w-4" />
              Novo Post
            </Button>
          </Link>
        </div>

        {/* Posts Table */}
        <div className="overflow-hidden rounded-xl border border-[#6841FA]/20 bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Autor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Visualizações
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Data
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-gray-500"
                  >
                    Nenhum post encontrado. Crie seu primeiro post!
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-[#2C216F]">
                        {post.title}
                      </div>
                      <div className="text-xs text-gray-500">{post.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {post.author?.name || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          togglePublish(post.id, post.is_published)
                        }
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                          post.is_published
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.is_published ? (
                          <>
                            <Eye className="h-3 w-3" />
                            Publicado
                          </>
                        ) : (
                          <>
                            <EyeOff className="h-3 w-3" />
                            Rascunho
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm font-medium text-[#6841FA]">
                        <Eye className="h-4 w-4" />
                        {post.views.toLocaleString('pt-BR')}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {formatDate(post.published_at || post.created_at)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/dashboard/posts/edit/${post.id}`}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#6841FA] text-[#6841FA] hover:bg-[#6841FA]/10"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(post.id, post.title)}
                          className="border-red-500 text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
