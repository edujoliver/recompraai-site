"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
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

export default function EditPostPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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
  const params = useParams();
  const postId = params.id as string;

  useEffect(() => {
    checkAuth();
    loadData();
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

  const loadData = async () => {
    try {
      // Load post
      const { data: post, error: postError } = await supabase
        .from("blog_posts")
        .select(
          `
          *,
          categories:blog_post_categories(category_id)
        `
        )
        .eq("id", postId)
        .single();

      if (postError) throw postError;

      setTitle(post.title);
      setSlug(post.slug);
      setSummary(post.summary || "");
      setContent(post.content || "");
      setThumbnailUrl(post.thumbnail_url || "");
      setAuthorId(post.author_id || "");
      setReadingTime(post.reading_time || 5);
      setIsPublished(post.is_published || false);
      setIsFeatured(post.is_featured || false);
      setMetaDescription(post.meta_description || "");
      setTags(post.tags || "");
      setSelectedCategories(
        post.categories?.map((c: { category_id: string }) => c.category_id) || []
      );

      // Load authors and categories
      const [authorsRes, categoriesRes] = await Promise.all([
        supabase.from("blog_authors").select("id, name").order("name"),
        supabase.from("blog_categories").select("id, name").order("name"),
      ]);

      if (authorsRes.data) setAuthors(authorsRes.data);
      if (categoriesRes.data) setCategories(categoriesRes.data);
    } catch (error) {
      console.error("Erro ao carregar post:", error);
      alert("Erro ao carregar post");
      router.push("/admin/dashboard/posts");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Update post
      const { error: postError } = await supabase
        .from("blog_posts")
        .update({
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
          published_at:
            isPublished && !isPublished ? new Date().toISOString() : undefined,
          updated_at: new Date().toISOString(),
        })
        .eq("id", postId);

      if (postError) throw postError;

      // Delete old category relations
      await supabase.from("blog_post_categories").delete().eq("post_id", postId);

      // Add new categories
      if (selectedCategories.length > 0) {
        const categoryRelations = selectedCategories.map((categoryId) => ({
          post_id: postId,
          category_id: categoryId,
        }));

        const { error: catError } = await supabase
          .from("blog_post_categories")
          .insert(categoryRelations);

        if (catError) throw catError;
      }

      alert("Post atualizado com sucesso!");
      router.push("/admin/dashboard/posts");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao atualizar post: " + message);
    } finally {
      setSaving(false);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F5FF]">
        <p className="text-[#5C5C73]">Carregando post...</p>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-[#2C216F]">Editar Post</h1>
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
                      Post publicado
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
                disabled={saving}
                className="bg-[#6841FA] hover:bg-[#5935d9]"
              >
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Salvando..." : "Salvar Alterações"}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
