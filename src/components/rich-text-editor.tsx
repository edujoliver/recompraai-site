"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { Button } from "@/components/ui/button";
import { HeadingWithId } from "@/lib/tiptap-heading-id";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  FileCode,
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  content,
  onChange,
  placeholder = "Escreva o conteúdo do seu post...",
}: RichTextEditorProps) {
  const [showHtml, setShowHtml] = useState(false);
  const [htmlContent, setHtmlContent] = useState(content);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false, // Desabilita heading do StarterKit
      }),
      HeadingWithId.configure({
        levels: [2, 3],
        HTMLAttributes: {
          class: 'scroll-mt-20',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#6841FA] underline hover:text-[#5935d9]",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none min-h-[400px] p-4 focus:outline-none prose-headings:text-[#2C216F] prose-p:text-[#5C5C73] prose-a:text-[#6841FA] [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      // Validate file
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecione um arquivo de imagem válido.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("O arquivo deve ter no máximo 5MB.");
        return;
      }

      try {
        // Upload to Supabase
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;

        const { data, error } = await supabase.storage
          .from("blog-images")
          .upload(fileName, file);

        if (error) throw error;

        const {
          data: { publicUrl },
        } = supabase.storage.from("blog-images").getPublicUrl(data.path);

        editor.chain().focus().setImage({ src: publicUrl }).run();
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Erro desconhecido";
        alert("Erro ao fazer upload da imagem: " + message);
      }
    };

    input.click();
  };

  const toggleHtmlMode = () => {
    if (!showHtml) {
      // Mudando para modo HTML - salva o conteúdo atual
      setHtmlContent(editor?.getHTML() || "");
    } else {
      // Voltando para modo visual - atualiza o editor
      editor?.commands.setContent(htmlContent);
      onChange(htmlContent);
    }
    setShowHtml(!showHtml);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b bg-gray-50 p-2">
        <Button
          type="button"
          variant={showHtml ? "default" : "ghost"}
          size="sm"
          onClick={toggleHtmlMode}
          className="mr-2"
        >
          <FileCode className="h-4 w-4 mr-1" />
          {showHtml ? "Visual" : "HTML"}
        </Button>
        <div className="mx-1 h-6 w-px bg-gray-300" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <div className="mx-1 h-6 w-px bg-gray-300" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <Code className="h-4 w-4" />
        </Button>
        <div className="mx-1 h-6 w-px bg-gray-300" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "bg-gray-200" : ""}
          disabled={showHtml}
        >
          <Quote className="h-4 w-4" />
        </Button>
        <div className="mx-1 h-6 w-px bg-gray-300" />
        <Button type="button" variant="ghost" size="sm" onClick={addLink} disabled={showHtml}>
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={addImage} disabled={showHtml}>
          <ImageIcon className="h-4 w-4" />
        </Button>
        <div className="mx-1 h-6 w-px bg-gray-300" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo() || showHtml}
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo() || showHtml}
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor ou HTML */}
      {showHtml ? (
        <textarea
          value={htmlContent}
          onChange={(e) => {
            setHtmlContent(e.target.value);
            onChange(e.target.value);
          }}
          className="min-h-[400px] w-full p-4 font-mono text-sm bg-gray-900 text-green-400 focus:outline-none"
          placeholder="Cole seu HTML aqui..."
        />
      ) : (
        <EditorContent editor={editor} className="bg-white tiptap" />
      )}
      
      {/* Debug info - mostra o formato atual */}
      {!showHtml && (
        <div className="border-t bg-gray-50 px-4 py-2 text-xs text-gray-600">
          {editor.isActive("heading", { level: 2 }) && "✅ H2 ativo"}
          {editor.isActive("heading", { level: 3 }) && "✅ H3 ativo"}
          {editor.isActive("bold") && " | Negrito"}
          {!editor.isActive("heading") && !editor.isActive("bold") && "Texto normal"}
        </div>
      )}
    </div>
  );
}
