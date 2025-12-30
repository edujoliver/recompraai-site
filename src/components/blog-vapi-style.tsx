"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { BlogSectionSkeleton } from "@/components/blog-skeleton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";

interface Post {
  id: string;
  category: string;
  categorySlug: string;
  title: string;
  summary: string;
  link: string;
  thumbnail: string;
  published_at: string;
  is_featured?: boolean;
}

interface Category {
  label: string;
  value: string;
  count: number;
}

const POSTS_PER_CATEGORY = 8;

export const BlogVapiStyle = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDataFromSupabase();
  }, []);

  const loadDataFromSupabase = async () => {
    try {
      const { data: postsData } = await supabase
        .from("blog_posts")
        .select(
          `
          id,
          title,
          slug,
          summary,
          thumbnail_url,
          is_featured,
          published_at,
          post_categories:blog_post_categories(
            category:blog_categories(name, slug)
          )
        `
        )
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (postsData && postsData.length > 0) {
        const dbPosts: Post[] = postsData.map((post: any) => {
          const categoryName =
            post.post_categories?.[0]?.category?.name || "Sem categoria";
          const categorySlug =
            post.post_categories?.[0]?.category?.slug || "sem-categoria";

          return {
            id: post.id,
            category: categoryName,
            categorySlug: categorySlug,
            title: post.title || "",
            summary: post.summary || "",
            link: `/blog/${post.slug}`,
            thumbnail:
              post.thumbnail_url ||
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
            published_at: post.published_at || "",
            is_featured: post.is_featured || false,
          };
        });

        setPosts(dbPosts);

        // Calculate category counts
        const categoryCounts = dbPosts.reduce((acc: Record<string, number>, post) => {
          acc[post.category] = (acc[post.category] || 0) + 1;
          return acc;
        }, {});

        const dbCategories: Category[] = [
          { label: "Todos", value: "all", count: dbPosts.length },
          ...Object.entries(categoryCounts).map(([name, count]) => ({
            label: name,
            value: name.toLowerCase().replace(/\s+/g, "-"),
            count: count as number,
          })),
        ];
        
        setCategories(dbCategories);
      }
    } catch (error) {
      console.error("Error loading blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).toUpperCase();
  };

  const handleCategoryClick = useCallback((categoryValue: string) => {
    setSelectedCategory(categoryValue);
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }, []);

  const featuredPost = posts.find((p) => p.is_featured) || posts[0];
  const categoryPosts = useMemo(() => {
    const grouped: Record<string, Post[]> = {};
    
    categories.forEach((cat) => {
      if (cat.value === "all") return;
      
      grouped[cat.value] = posts.filter(
        (post) => post.category.toLowerCase().replace(/\s+/g, "-") === cat.value
      );
    });
    
    return grouped;
  }, [posts, categories]);

  if (loading) {
    return <BlogSectionSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-white bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:1.5rem_1.5rem] bg-repeat">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          {/* Header */}
          <div>
            <div className="mb-4">
              <span className="font-mono text-sm font-medium uppercase tracking-wider" style={{ color: '#6841fa' }}>
                BLOG
              </span>
            </div>
            <h1 className="mb-6 font-sans text-5xl font-medium tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Artigos
            </h1>
            <Button
              asChild
              className="bg-primary px-6 py-6 font-mono font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#newsletter">
                Inscrever na Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Pills Section */}
      <section className="border-b border-gray-800 bg-gray-950 py-8">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 overflow-x-auto">
            {/* Categories */}
            {categories.map((category) => {
              const isActive = selectedCategory === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => handleCategoryClick(category.value)}
                  className={`whitespace-nowrap rounded-full border px-6 py-3 font-mono text-sm font-medium transition-all ${
                    isActive
                      ? "border-white bg-white text-gray-950"
                      : "border-gray-700 bg-transparent text-gray-300 hover:border-gray-500"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
            
            {/* Search Input */}
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-48 rounded-full border border-gray-700 bg-transparent px-4 py-3 pl-10 font-mono text-sm text-white placeholder:text-gray-500 transition-all focus:border-gray-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="border-b border-gray-200 bg-white pb-12 pt-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {featuredPost && (
            <Link href={featuredPost.link} className="group block">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="font-mono text-sm font-normal uppercase tracking-wider text-gray-400">
                    {formatDate(featuredPost.published_at)}
                  </div>
                  <h2 className="font-sans text-3xl font-medium leading-tight text-gray-900 transition-colors group-hover:text-[#6841fa] lg:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <div>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-2 border-gray-900 bg-transparent px-8 py-6 font-mono text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        LER MAIS
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Category Sections */}
      <section className="bg-gray-950 py-16">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {categories
            .filter((cat) => cat.value !== "all")
            .map((category) => {
              const categoryPostsList = categoryPosts[category.value] || [];
              const visiblePosts = categoryPostsList.slice(0, 4);

              if (visiblePosts.length === 0) return null;

              return (
                <div key={category.value} className="mb-16 last:mb-0">
                  {/* Category Layout */}
                  <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
                    {/* Left: Category Title */}
                    <div className="flex flex-col gap-4">
                      <h2 className="font-sans text-3xl font-medium uppercase tracking-tight text-white lg:text-4xl">
                        {category.label}
                      </h2>
                      <span className="inline-flex items-center gap-2 font-mono text-sm font-normal text-[#4ADE80]">
                        VER MAIS
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Right: Posts Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {visiblePosts.map((post, index) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          formatDate={formatDate}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="border-t border-gray-200 py-20 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:1.5rem_1.5rem] bg-repeat" style={{ backgroundColor: '#fffaea' }}>
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="mb-8 font-sans text-5xl font-light text-gray-900 lg:text-6xl">
            Junte-se à newsletter para se manter atualizado.
          </h2>
          <form className="mx-auto flex max-w-2xl gap-0 rounded-full bg-gray-900 p-1.5">
            <input
              type="email"
              placeholder="EMAIL"
              className="flex-1 bg-transparent px-8 py-3 font-mono text-sm uppercase tracking-wider text-white placeholder:text-gray-400 focus:outline-none"
            />
            <Button
              type="submit"
              size="lg"
              className="h-auto rounded-full px-10 py-3 font-mono font-medium uppercase tracking-wider text-white hover:opacity-90"
              style={{ backgroundColor: '#6841fa' }}
            >
              Inscrever
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

interface BlogCardProps {
  post: Post;
  formatDate: (date: string) => string;
  index: number;
}

const BlogCard = ({ post, formatDate, index }: BlogCardProps) => {
  return (
    <Link
      href={post.link}
      className="group block"
    >
      <article className="h-full">
        {/* Image */}
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-gray-900">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          {/* Date */}
          {post.published_at && (
            <span className="font-mono text-xs font-normal uppercase tracking-wider text-gray-500">
              {formatDate(post.published_at)}
            </span>
          )}

          {/* Title */}
          <h3 className="line-clamp-2 font-sans text-base font-normal leading-tight text-white transition-colors duration-300 group-hover:text-[#4ADE80]">
            {post.title}
          </h3>
        </div>
      </article>
    </Link>
  );
};
