import { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Blogpost6 } from "@/components/blogpost6";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all published posts
export async function generateStaticParams() {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("is_published", true);

  return (
    posts?.map((post) => ({
      slug: post.slug,
    })) || []
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, summary, thumbnail_url, published_at")
    .eq("slug", params.slug)
    .eq("is_published", true)
    .single();

  if (!post) {
    return {
      title: "Post não encontrado | RecompraAI",
    };
  }

  return {
    title: `${post.title} | Blog RecompraAI`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.published_at,
      images: post.thumbnail_url ? [post.thumbnail_url] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: post.thumbnail_url ? [post.thumbnail_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  // Fetch post data
  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(
      `
      id,
      title,
      slug,
      summary,
      content,
      thumbnail_url,
      reading_time,
      published_at,
      views,
      author:blog_authors(
        name,
        email,
        avatar_url,
        job_title,
        bio,
        twitter_url,
        linkedin_url
      ),
      post_categories:blog_post_categories(
        category:blog_categories(name, slug)
      )
    `
    )
    .eq("slug", params.slug)
    .eq("is_published", true)
    .single();

  if (error || !post) {
    notFound();
  }

  // Increment views count
  await supabase.rpc("increment_daily_post_views", { post_id: post.id });

  // Fix author type (Supabase returns array, we need single object)
  const postData = {
    ...post,
    author: Array.isArray(post.author) ? post.author[0] : post.author,
  };

  return <Blogpost6 post={postData} />;
}

// Enable ISR with revalidation
export const revalidate = 3600; // Revalidate every hour
