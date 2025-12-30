"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label = "Imagem de Capa",
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(value);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione um arquivo de imagem válido.");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("O arquivo deve ter no máximo 5MB.");
      return;
    }

    setUploading(true);

    try {
      // Generate unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-images").getPublicUrl(data.path);

      setPreview(publicUrl);
      onChange(publicUrl);
    } catch (error: unknown) {
      console.error("Erro ao fazer upload:", error);
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      alert("Erro ao fazer upload da imagem: " + message);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview("");
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUrlChange = (url: string) => {
    setPreview(url);
    onChange(url);
  };

  return (
    <div className="space-y-4">
      <Label className="text-[#2C216F]">{label}</Label>

      {/* Preview */}
      {preview && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Upload Button */}
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="image-upload"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full"
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Fazendo upload...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Fazer Upload
              </>
            )}
          </Button>
        </div>
      </div>

      {/* URL Input */}
      <div>
        <Label htmlFor="image-url" className="text-sm text-gray-500">
          Ou insira uma URL de imagem
        </Label>
        <Input
          id="image-url"
          type="url"
          value={preview}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="https://exemplo.com/imagem.jpg"
          className="mt-1"
        />
      </div>

      <p className="text-xs text-gray-500">
        Formatos aceitos: JPG, PNG, GIF, WebP. Tamanho máximo: 5MB.
      </p>
    </div>
  );
}
