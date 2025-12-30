"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Pencil, Upload } from "lucide-react";
import Image from "next/image";

interface Author {
  id: string;
  name: string;
  email: string;
  job_title: string | null;
  avatar_url: string | null;
  bio: string | null;
  twitter_url: string | null;
  linkedin_url: string | null;
  created_at: string;
}

export default function AuthorsPage() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [bio, setBio] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    loadAuthors();
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

  const loadAuthors = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_authors")
        .select("*")
        .order("name");

      if (error) throw error;
      setAuthors(data || []);
    } catch (error) {
      console.error("Erro ao carregar autores:", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadAvatar = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `authors/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-images").getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error("Erro ao fazer upload:", error);
      return null;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setJobTitle("");
    setBio("");
    setTwitterUrl("");
    setLinkedinUrl("");
    setAvatarFile(null);
    setAvatarPreview(null);
    setEditingId(null);
    setShowForm(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let avatarUrl = null;
      if (avatarFile) {
        avatarUrl = await uploadAvatar(avatarFile);
      }

      const { error } = await supabase.from("blog_authors").insert({
        name,
        email,
        job_title: jobTitle || null,
        avatar_url: avatarUrl,
        bio: bio || null,
        twitter_url: twitterUrl || null,
        linkedin_url: linkedinUrl || null,
      });

      if (error) throw error;

      alert("Autor criado com sucesso!");
      resetForm();
      loadAuthors();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao criar autor: " + message);
    } finally {
      setUploading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;

    setUploading(true);

    try {
      let avatarUrl = avatarPreview;
      if (avatarFile) {
        avatarUrl = await uploadAvatar(avatarFile);
      }

      const { error } = await supabase
        .from("blog_authors")
        .update({
          name,
          email,
          job_title: jobTitle || null,
          avatar_url: avatarUrl,
          bio: bio || null,
          twitter_url: twitterUrl || null,
          linkedin_url: linkedinUrl || null,
        })
        .eq("id", editingId);

      if (error) throw error;

      alert("Autor atualizado com sucesso!");
      resetForm();
      loadAuthors();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao atualizar autor: " + message);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (author: Author) => {
    setEditingId(author.id);
    setName(author.name);
    setEmail(author.email);
    setJobTitle(author.job_title || "");
    setBio(author.bio || "");
    setTwitterUrl(author.twitter_url || "");
    setLinkedinUrl(author.linkedin_url || "");
    setAvatarPreview(author.avatar_url);
    setShowForm(true);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja deletar o autor "${name}"?`)) {
      return;
    }

    try {
      const { error } = await supabase.from("blog_authors").delete().eq("id", id);

      if (error) throw error;

      alert("Autor deletado com sucesso!");
      loadAuthors();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao deletar autor: " + message);
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
              Gerenciar Autores
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[#5C5C73]">
            {authors.length} {authors.length === 1 ? "autor" : "autores"}
          </p>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#6841FA] hover:bg-[#5935d9]"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Autor
          </Button>
        </div>

        {/* Create/Edit Form */}
        {showForm && (
          <div className="mb-6 rounded-xl border border-[#6841FA]/20 bg-white p-6 shadow">
            <h2 className="mb-4 text-lg font-semibold text-[#2C216F]">
              {editingId ? "Editar Autor" : "Novo Autor"}
            </h2>
            <form onSubmit={editingId ? handleUpdate : handleCreate} className="space-y-4">
              {/* Avatar Upload */}
              <div>
                <Label className="text-[#2C216F]">Foto do Autor</Label>
                <div className="mt-2 flex items-center gap-4">
                  {avatarPreview ? (
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#6841FA]/20">
                      <Image
                        src={avatarPreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="mt-1"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      PNG, JPG ou WEBP. Tamanho recomendado: 200x200px
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-[#2C216F]">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                  placeholder="João Silva"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#2C216F]">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                  placeholder="joao@exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="jobTitle" className="text-[#2C216F]">
                  Cargo
                </Label>
                <Input
                  id="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="mt-1"
                  placeholder="Redator, Jornalista, etc"
                />
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="bio" className="text-[#2C216F]">
                  Biografia
                </Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="mt-1"
                  placeholder="Breve biografia do autor (aparece no rodapé dos posts)"
                  rows={3}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Aparece no rodapé dos posts do blog
                </p>
              </div>

              {/* Twitter URL */}
              <div>
                <Label htmlFor="twitterUrl" className="text-[#2C216F]">
                  Twitter / X (URL)
                </Label>
                <Input
                  id="twitterUrl"
                  type="url"
                  value={twitterUrl}
                  onChange={(e) => setTwitterUrl(e.target.value)}
                  className="mt-1"
                  placeholder="https://twitter.com/seuusuario"
                />
              </div>

              {/* LinkedIn URL */}
              <div>
                <Label htmlFor="linkedinUrl" className="text-[#2C216F]">
                  LinkedIn (URL)
                </Label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="mt-1"
                  placeholder="https://linkedin.com/in/seuusuario"
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                  disabled={uploading}
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="bg-[#6841FA] hover:bg-[#5935d9]"
                  disabled={uploading}
                >
                  {uploading ? "Salvando..." : editingId ? "Atualizar" : "Criar"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Authors List */}
        <div className="rounded-xl border border-[#6841FA]/20 bg-white shadow">
          <div className="divide-y divide-gray-200">
            {authors.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-gray-500">
                Nenhum autor encontrado. Crie o primeiro!
              </div>
            ) : (
              authors.map((author) => (
                <div
                  key={author.id}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    {author.avatar_url ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#6841FA]/20">
                        <Image
                          src={author.avatar_url}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100 text-sm font-medium text-gray-600">
                        {author.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-[#2C216F]">{author.name}</p>
                      <p className="text-sm text-gray-500">{author.email}</p>
                      {author.job_title && (
                        <p className="text-xs text-gray-400">{author.job_title}</p>
                      )}
                      {author.bio && (
                        <p className="mt-1 text-xs text-gray-400 line-clamp-1">
                          {author.bio}
                        </p>
                      )}
                      {(author.twitter_url || author.linkedin_url) && (
                        <div className="mt-1 flex gap-2 text-xs">
                          {author.twitter_url && (
                            <span className="text-blue-500">🐦 Twitter</span>
                          )}
                          {author.linkedin_url && (
                            <span className="text-blue-600">💼 LinkedIn</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(author)}
                      className="border-[#6841FA] text-[#6841FA] hover:bg-[#6841FA]/10"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(author.id, author.name)}
                      className="border-red-500 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
