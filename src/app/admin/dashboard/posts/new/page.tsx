"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/rich-text-editor";
import ImageUpload from "@/components/image-upload";
import PostPreview from "@/components/post-preview";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

interface Author {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

export default function NewPostPage() {
  const [loading, setLoading] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [readingTime, setReadingTime] = useState(5);
  const [isPublished, setIsPublished] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [metaDescription, setMetaDescription] = useState("");
  const [tags, setTags] = useState("");

  const router = useRouter();

  useEffect(() => {
    checkAuth();
    loadAuthorsAndCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Auto-generate slug from title
    if (title) {
      const generatedSlug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setSlug(generatedSlug);
    }
  }, [title]);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/admin");
    }
  };

  const loadAuthorsAndCategories = async () => {
    try {
      const [authorsRes, categoriesRes] = await Promise.all([
        supabase.from("blog_authors").select("id, name").order("name"),
        supabase.from("blog_categories").select("id, name").order("name"),
      ]);

      if (authorsRes.data) setAuthors(authorsRes.data);
      if (categoriesRes.data) setCategories(categoriesRes.data);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create post
      const { data: post, error: postError } = await supabase
        .from("blog_posts")
        .insert({
          title,
          slug,
          summary,
          content,
          thumbnail_url: thumbnailUrl || null,
          author_id: authorId || null,
          reading_time: readingTime,
          is_published: isPublished,
          is_featured: isFeatured,
          meta_description: metaDescription || summary,
          tags: tags || null,
          published_at: isPublished ? new Date().toISOString() : null,
        })
        .select()
        .single();

      if (postError) throw postError;

      // Add categories
      if (selectedCategories.length > 0) {
        const categoryRelations = selectedCategories.map((categoryId) => ({
          post_id: post.id,
          category_id: categoryId,
        }));

        const { error: catError } = await supabase
          .from("blog_post_categories")
          .insert(categoryRelations);

        if (catError) throw catError;
      }

      alert("Post criado com sucesso!");
      router.push("/admin/dashboard/posts");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao criar post: " + message);
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5FF]">
      {/* Header */}
      <header className="border-b border-[#6841FA]/20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard/posts">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#2C216F]">Novo Post</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card */}
          <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6 shadow">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-[#2C216F]">
                  Título do Post *
                </Label>
                <Input
                  id="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1"
                  placeholder="Digite o título do post"
                />
              </div>

              {/* Slug */}
              <div>
                <Label htmlFor="slug" className="text-[#2C216F]">
                  Slug (URL) *
                </Label>
                <Input
                  id="slug"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="mt-1"
                  placeholder="slug-do-post"
                />
                <p className="mt-1 text-xs text-gray-500">
                  URL: /blog/{slug || "slug-do-post"}
                </p>
              </div>

              {/* Summary */}
              <div>
                <Label htmlFor="summary" className="text-[#2C216F]">
                  Resumo *
                </Label>
                <Textarea
                  id="summary"
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="mt-1 min-h-[80px]"
                  placeholder="Breve descrição do post (aparece nas listagens)"
                />
              </div>

              {/* Meta Description (SEO) */}
              <div>
                <Label htmlFor="metaDescription" className="text-[#2C216F]">
                  Meta Description (SEO)
                </Label>
                <Textarea
                  id="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="mt-1 min-h-[80px]"
                  placeholder="Descrição para SEO (se deixar em branco, usará o resumo)"
                  maxLength={160}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Ideal: 150-160 caracteres. Aparece nos resultados do Google.
                  {metaDescription && ` (${metaDescription.length}/160)`}
                </p>
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags" className="text-[#2C216F]">
                  Tags (palavras-chave)
                </Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="mt-1"
                  placeholder="delivery, vendas, estratégias, marketing"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Separe as tags por vírgula. Útil para SEO e organização.
                </p>
              </div>

              {/* Content */}
              <div>
                <Label className="text-[#2C216F]">
                  Conteúdo *
                </Label>
                <div className="mt-1">
                  <RichTextEditor
                    content={content}
                    onChange={setContent}
                    placeholder="Escreva o conteúdo do seu post..."
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Use a barra de ferramentas para formatar o texto
                </p>
              </div>

              {/* Thumbnail */}
              <div>
                <ImageUpload
                  value={thumbnailUrl}
                  onChange={setThumbnailUrl}
                  label="Imagem de Capa do Post"
                />
              </div>

              {/* Author and Reading Time */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="author" className="text-[#2C216F]">
                    Autor
                  </Label>
                  <select
                    id="author"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Selecione um autor</option>
                    {authors.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="readingTime" className="text-[#2C216F]">
                    Tempo de Leitura (minutos)
                  </Label>
                  <Input
                    id="readingTime"
                    type="number"
                    min="1"
                    value={readingTime}
                    onChange={(e) => setReadingTime(parseInt(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <Label className="text-[#2C216F]">Categorias</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        selectedCategories.includes(category.id)
                          ? "border-[#6841FA] bg-[#6841FA] text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-[#6841FA]"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                {categories.length === 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    Nenhuma categoria encontrada.{" "}
                    <Link
                      href="/admin/dashboard/categories"
                      className="text-[#6841FA] hover:underline"
                    >
                      Criar categoria
                    </Link>
                  </p>
                )}
              </div>

              {/* Publish Status */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-[#6841FA]/20 bg-[#F5F5FF] p-4">
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={isPublished}
                    onChange={(e) => setIsPublished(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-[#6841FA] focus:ring-[#6841FA]"
                  />
                  <div>
                    <Label htmlFor="isPublished" className="text-[#2C216F]">
                      Publicar imediatamente
                    </Label>
                    <p className="text-xs text-gray-500">
                      Se desmarcado, o post ficará como rascunho
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-[#FFB800]/20 bg-[#FFF9E6] p-4">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-[#FFB800] focus:ring-[#FFB800]"
                  />
                  <div>
                    <Label htmlFor="isFeatured" className="text-[#2C216F]">
                      ⭐ Destacar este post
                    </Label>
                    <p className="text-xs text-gray-500">
                      O post aparecerá no card grande (hero) da página de blog
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4">
            <PostPreview
              title={title}
              summary={summary}
              content={content}
              thumbnailUrl={thumbnailUrl}
              categories={categories
                .filter((c) => selectedCategories.includes(c.id))
                .map((c) => c.name)}
              readingTime={readingTime}
            />
            <div className="flex gap-4">
              <Link href="/admin/dashboard/posts">
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#6841FA] hover:bg-[#5935d9]"
              >
                <Save className="mr-2 h-4 w-4" />
                {loading ? "Salvando..." : "Criar Post"}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
