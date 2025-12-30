"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/admin");
    }
  };

  const loadCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("*")
        .order("name");

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    try {
      const { error } = await supabase.from("blog_categories").insert({
        name,
        slug,
      });

      if (error) throw error;

      alert("Categoria criada com sucesso!");
      setName("");
      setShowForm(false);
      loadCategories();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao criar categoria: " + message);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja deletar a categoria "${name}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from("blog_categories")
        .delete()
        .eq("id", id);

      if (error) throw error;

      alert("Categoria deletada com sucesso!");
      loadCategories();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao deletar categoria: " + message);
    }
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
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#2C216F]">
              Gerenciar Categorias
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[#5C5C73]">
            {categories.length}{" "}
            {categories.length === 1 ? "categoria" : "categorias"}
          </p>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#6841FA] hover:bg-[#5935d9]"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nova Categoria
          </Button>
        </div>

        {/* Create Form */}
        {showForm && (
          <div className="mb-6 rounded-xl border border-[#6841FA]/20 bg-white p-6 shadow">
            <h2 className="mb-4 text-lg font-semibold text-[#2C216F]">
              Nova Categoria
            </h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-[#2C216F]">
                  Nome da Categoria *
                </Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                  placeholder="Ex: Marketing, CRM, Delivery"
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setName("");
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-[#6841FA] hover:bg-[#5935d9]">
                  Criar
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Categories List */}
        <div className="rounded-xl border border-[#6841FA]/20 bg-white shadow">
          <div className="divide-y divide-gray-200">
            {categories.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-gray-500">
                Nenhuma categoria encontrada. Crie a primeira!
              </div>
            ) : (
              categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-[#2C216F]">{category.name}</p>
                    <p className="text-sm text-gray-500">{category.slug}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(category.id, category.name)}
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
