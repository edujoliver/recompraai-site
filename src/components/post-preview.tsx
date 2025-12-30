"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PostPreviewProps {
  title: string;
  summary: string;
  content: string;
  thumbnailUrl: string;
  categories: string[];
  readingTime: number;
}

export default function PostPreview({
  title,
  summary,
  content,
  thumbnailUrl,
  categories,
  readingTime,
}: PostPreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" className="gap-2">
          <Eye className="h-4 w-4" />
          Visualizar Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Preview do Post</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#6841FA]/10 px-3 py-1 text-sm font-medium text-[#6841FA]"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#2C216F]">{title || "Título do Post"}</h1>

          {/* Summary */}
          <p className="text-xl text-[#5C5C73]">{summary || "Resumo do post..."}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#5C5C73]">
            <span>{readingTime} min de leitura</span>
          </div>

          {/* Thumbnail */}
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt="Preview"
              width={800}
              height={450}
              className="h-auto w-full rounded-xl object-cover"
            />
          )}

          {/* Content */}
          <div
            className="tiptap prose prose-lg max-w-none prose-headings:text-[#2C216F] prose-p:text-[#5C5C73] prose-a:text-[#6841FA]"
            dangerouslySetInnerHTML={{
              __html: content || "<p>Escreva o conteúdo do seu post...</p>",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
