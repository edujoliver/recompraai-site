"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Slash } from "lucide-react";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { BlogSectionSkeleton } from "@/components/blog-skeleton";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface Post {
  category: string;
  title: string;
  summary: string;
  link: string;
  cta: string;
  thumbnail: string;
  is_featured?: boolean;
}

interface Category {
  label: string;
  value: string;
}

interface FilterFormProps {
  categories: Array<Category>;
  onCategoryChange: (selectedCategories: string[]) => void;
}

interface BlogsResultProps {
  posts: Array<Post>;
  categories: Array<Category>;
}

interface BreadcrumbBlogProps {
  breadcrumb: Array<BreadcrumbItem>;
}

const POSTS_PER_PAGE = 6;

const BREADCRUMB: Array<BreadcrumbItem> = [
  {
    label: "Blog",
    link: "/blog",
  },
];

const CATEGORIES: Array<Category> = [
  {
    label: "Todos",
    value: "all",
  },
];

const PRIMARY_POST: Post = {
  category: "Blog",
  title: "Carregando...",
  summary: "Carregando conteúdo...",
  link: "#",
  cta: "Ler mais",
  thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
};

const POSTS: Array<Post> = [];

const FilterFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "At least one category should be selected.",
  }),
});

const FilterForm = ({ categories, onCategoryChange }: FilterFormProps) => {
  const form = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      items: [CATEGORIES[0].value],
    },
  });

  const handleCheckboxChange = useCallback(
    (
      checked: boolean | string,
      categoryValue: string,
      field: ControllerRenderProps<z.infer<typeof FilterFormSchema>, "items">,
    ) => {
      let updatedValues = checked
        ? [...field.value, categoryValue]
        : field.value.filter((value: string) => value !== categoryValue);

      // If no categories are checked, add "all"
      if (updatedValues.length === 0) {
        form.setValue("items", ["all"]);
        onCategoryChange(["all"]);
        return;
      }

      // Remove "all" if specific category is checked
      if (updatedValues.includes("all")) {
        updatedValues = updatedValues.filter((v: string) => v !== "all");
      }

      // Avoid unnecessary updates
      if (JSON.stringify(field.value) !== JSON.stringify(updatedValues)) {
        form.setValue("items", updatedValues);
        onCategoryChange(updatedValues);
      }
    },
    [form, onCategoryChange],
  );

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem className="flex w-full flex-wrap items-center gap-2.5">
              {categories.map((category) => {
                const isChecked = field.value?.includes(category.value);
                return (
                  <FormItem
                    key={category.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Label className="bg-muted flex cursor-pointer items-center gap-2.5 rounded-full px-2.5 py-1.5">
                        <div>{category.label}</div>
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(checked, category.value, field)
                          }
                        />
                      </Label>
                    </FormControl>
                  </FormItem>
                );
              })}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const BlogsResult = ({ posts, categories }: BlogsResultProps) => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    CATEGORIES[0].value,
  ]);
  const handleCategoryChange = useCallback((selected: string[]) => {
    setSelectedCategories(selected);
    setVisibleCount(POSTS_PER_PAGE);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  }, []);
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        selectedCategories.includes(post.category.toLowerCase()) ||
        selectedCategories.includes("all"),
    );
  }, [posts, selectedCategories]);

  const postsToDisplay = filteredPosts.length > 0 ? filteredPosts : posts;

  const hasMore = visibleCount < postsToDisplay.length;

  return (
    <div>
      <FilterForm
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <div className="flex w-full flex-col gap-4 py-8 lg:gap-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {postsToDisplay.slice(0, visibleCount).map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
        <div className="flex justify-center">
          {hasMore && (
            <Button variant="secondary" onClick={handleLoadMore}>
              Carregar Mais
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const BreadcrumbBlog = ({ breadcrumb }: BreadcrumbBlogProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, i) => {
          return (
            <Fragment key={`${item.label}`}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {i < breadcrumb.length - 1 ? (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const BlogCard = ({ category, title, thumbnail, summary, link, cta }: Post) => {
  return (
    <a href={link} className="block h-full w-full">
      <Card className="size-full rounded-lg border py-0">
        <CardContent className="p-0">
          <div className="text-muted-foreground border-b p-2.5 text-sm font-medium leading-[1.2]">
            {category}
          </div>
          <AspectRatio ratio={1.520833333} className="overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-5 p-5">
            <h2 className="text-lg font-medium leading-tight md:text-xl">
              {title}
            </h2>
            <div className="w-full max-w-[20rem]">
              <p className="text-muted-foreground text-sm font-medium leading-[1.4]">
                {summary}
              </p>
            </div>
            <div>
              <Button size="sm" variant="outline">
                {cta}
                <ArrowRight />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const Blog27 = () => {
  const [posts, setPosts] = useState<Post[]>(POSTS);
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [primaryPost, setPrimaryPost] = useState<Post>(PRIMARY_POST);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDataFromSupabase();
  }, []);

  const loadDataFromSupabase = async () => {
    try {
      // Load categories from database
      const { data: categoriesData } = await supabase
        .from("blog_categories")
        .select("*")
        .order("name");

      if (categoriesData && categoriesData.length > 0) {
        const dbCategories: Category[] = [
          { label: "Todos", value: "all" },
          ...categoriesData.map((cat) => ({
            label: cat.name,
            value: cat.slug.toLowerCase(),
          })),
        ];
        setCategories(dbCategories);
      }

      // Load posts from database
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
          post_categories:blog_post_categories(
            category:blog_categories(name, slug)
          )
        `
        )
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (postsData && postsData.length > 0) {
        const dbPosts: Post[] = postsData.map((post: Record<string, unknown>) => {
          const postCategories = post.post_categories as Array<{ category: { name: string } }> | undefined;
          const categoryName =
            postCategories && Array.isArray(postCategories) && postCategories.length > 0
              ? postCategories[0].category.name
              : "Sem categoria";

          return {
            category: categoryName,
            title: String(post.title || ""),
            summary: String(post.summary || ""),
            link: `/blog/${post.slug}`,
            cta: "Ler mais",
            thumbnail:
              String(post.thumbnail_url || "") ||
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
            is_featured: Boolean(post.is_featured),
          };
        });

        // Find featured post or use the most recent one
        const featuredPost = dbPosts.find((post: Post) => post.is_featured);
        const primaryPostToUse = featuredPost || dbPosts[0];
        
        // Set featured/most recent post as primary
        setPrimaryPost(primaryPostToUse);
        
        // Set rest of posts (excluding the primary post)
        const remainingPosts = dbPosts.filter((post: Post) => 
          post.title !== primaryPostToUse.title
        );
        setPosts(remainingPosts);
      }
    } catch (error) {
      console.error("Error loading blog data:", error);
      // Keep using default static data on error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <BlogSectionSkeleton />;
  }

  return (
    <section className="pb-32">
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10 flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col justify-between gap-12">
            <div className="flex w-full max-w-[36rem] flex-col gap-8">
              <BreadcrumbBlog breadcrumb={BREADCRUMB} />
              <div className="flex w-full flex-col gap-5">
                <h1 className="text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl">
                  Insights e Estratégias
                </h1>
                <p className="text-muted-foreground text-xl leading-[1.4]">
                  Conteúdo de qualidade para ajudar você a crescer e se destacar no mercado de delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[27.5rem]">
            <BlogCard {...primaryPost} />
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10 flex flex-col gap-8">
          <h2 className="text-[1.75rem] font-medium leading-none md:text-[2.25rem] lg:text-[2rem]">
            Todos os Posts
          </h2>
          <div>
            <BlogsResult posts={posts} categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blog27 };
