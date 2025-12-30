"use client";
import { Linkedin, LucideIcon, Twitter } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface BreadcrumbBlogProps {
  breadcrumb: Array<BreadcrumbItem>;
}

interface AuthorType {
  image?: string;
  name: string;
  job: string;
  description: string;
  socials: {
    icon: LucideIcon;
    url: string;
  }[];
}

interface PostData {
  title: string;
  slug: string;
  summary: string;
  content: string;
  thumbnail_url: string | null;
  reading_time: number;
  published_at: string;
  author: {
    name: string;
    avatar_url: string | null;
    job_title: string | null;
    bio: string | null;
    twitter_url: string | null;
    linkedin_url: string | null;
  } | null;
}

interface Blogpost6Props {
  post: PostData;
}

const Blogpost6 = ({ post }: Blogpost6Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [chapters, setChapters] = useState<{ id: string; text: string }[]>([]);

  // Extract chapters from content
  useEffect(() => {
    if (typeof window !== "undefined") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content, "text/html");
      const h2Elements = doc.querySelectorAll("h2[id]");
      
      const extractedChapters = Array.from(h2Elements).map((h2) => ({
        id: h2.id,
        text: h2.textContent || "",
      }));
      
      setChapters(extractedChapters);
    }
  }, [post.content]);

  // Transform author data
  const author: AuthorType = post.author
    ? {
        image: post.author.avatar_url || undefined,
        name: post.author.name,
        job: post.author.job_title || "Autor",
        description: post.author.bio || "",
        socials: [
          ...(post.author.twitter_url
            ? [{ icon: Twitter, url: post.author.twitter_url }]
            : []),
          ...(post.author.linkedin_url
            ? [{ icon: Linkedin, url: post.author.linkedin_url }]
            : []),
        ],
      }
    : {
        name: "Autor Desconhecido",
        job: "Escritor",
        description: "",
        socials: [],
      };

  const breadcrumb: Array<BreadcrumbItem> = [
    { label: "Blog", link: "/blog" },
  ];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareTitle
      )}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    };

    window.open(
      urls[platform as keyof typeof urls],
      "_blank",
      "width=600,height=400"
    );
  };

  const shareLinks = [
    { icon: Twitter, platform: "twitter" },
    { icon: Linkedin, platform: "linkedin" },
  ];

  useEffect(() => {
    // Query all h2 elements with IDs
    const headingElements = Array.from(
      document.querySelectorAll("h2[id], h3[id]")
    ) as HTMLElement[];

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    // Smooth scroll for chapter links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick);
    };
  }, [post.content]);

  return (
    <section className="pb-32">
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-20">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex w-full flex-col items-center justify-center gap-12 py-20">
            <div className="flex w-full max-w-[48rem] flex-col items-center justify-center gap-8">
              <BreadcrumbBlog breadcrumb={breadcrumb} />
              <div className="flex w-full flex-col gap-5">
                <div className="text-muted-2-foreground flex items-center justify-center gap-2.5 text-sm font-medium">
                  <div>{post.reading_time} min de leitura</div>
                  <div>|</div>
                  <div>{formatDate(post.published_at)}</div>
                </div>
                <h1 className="text-center text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl">
                  {post.title}
                </h1>
                <p className="text-foreground text-center text-xl font-semibold leading-[1.4]">
                  {post.summary}
                </p>
                <div className="flex items-center justify-center gap-2.5">
                  {shareLinks.map((link, index) => (
                    <Button
                      key={`share-link-${index}`}
                      size="icon"
                      onClick={() => handleShare(link.platform)}
                    >
                      <link.icon />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[88rem] px-4 pt-20 sm:px-6 lg:px-10">
        <div className="relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex">
          {/* Chapters - Dynamic */}
          {chapters.length > 0 && (
            <div className="bg-background top-20 flex-1 pb-10 lg:sticky lg:pb-0">
              <div className="text-xl font-medium leading-snug">Capítulos</div>
              <div className="flex flex-col gap-2 pl-2 pt-2">
                {chapters.map((chapter) => (
                  <a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    className={`text-muted-foreground block text-sm font-medium leading-normal transition duration-300 hover:text-primary ${
                      activeId === chapter.id
                        ? "lg:bg-muted lg:!text-primary lg:rounded-md lg:p-2 lg:font-bold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {chapter.text}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex w-full max-w-[40rem] flex-col gap-10">
            {/* Thumbnail */}
            {post.thumbnail_url && (
              <div className="w-full max-w-[40rem] overflow-hidden rounded-lg">
                <Image
                  src={post.thumbnail_url}
                  alt={post.title}
                  width={640}
                  height={480}
                  className="size-full object-cover object-center"
                />
              </div>
            )}

            {/* Article Content */}
            <div
              className="tiptap prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Original static content as fallback - REMOVED */}
            <div className="prose dark:prose-invert hidden">
              <h2>Key Takeaways</h2>
              <p>
                • UI components are foundational, reusable elements in web
                development that encapsulate both design and behavior to promote
                consistency and efficiency.
              </p>
              <p>
                • Leveraging component libraries and frameworks streamlines the
                development process and ensures accessibility and cross-device
                compatibility.
              </p>
              <p>
                • Understanding different types of UI components enables
                developers to create structured, scalable, and maintainable user
                interfaces.
              </p>

              <p>
                In the evolving landscape of modern web development, UI
                components have emerged as indispensable tools for crafting
                user-friendly interfaces. These components, ranging from simple
                buttons to complex data tables, are the building blocks that
                help shape the overall user experience. By modularizing the
                interface into smaller, manageable pieces, UI components not
                only streamline the development process but also promote
                consistency across an application&apos;s design. As digital products
                become more complex, the role of well-structured UI components
                becomes even more critical in meeting user expectations and
                maintaining code quality.
              </p>
              <h2 id="heading-1" className="scroll-mt-24">
                The Role of UI Components in Development
              </h2>
              <p>
                UI components serve as self-contained units of functionality and
                presentation, often designed to be reused across multiple parts
                of an application. By encapsulating both logic and styling,
                components reduce duplication and improve the maintainability of
                codebases. For example, a single button component can be reused
                with different props or styles, ensuring a uniform look and feel
                throughout the application. This modular approach also allows
                for parallel development, where teams can work on separate
                components without interfering with each other&apos;s work.
              </p>
              <p>
                Popular frameworks like React, Vue, and Angular are built around
                component-based architectures, encouraging developers to think
                in terms of reusable blocks rather than monolithic pages. This
                shift not only enhances scalability but also simplifies testing
                and debugging. Additionally, many UI libraries such as Material
                UI, Chakra UI, and Radix UI provide pre-built, accessible
                components that accelerate development and ensure consistency
                with design systems. Embracing components as first-class
                citizens in frontend architecture leads to better code
                organization, faster prototyping, and a more seamless user
                experience.
              </p>
              <h2 id="heading-2" className="scroll-mt-24">
                Core Types of UI Components
              </h2>
              <h3>1. Input Components</h3>
              <p>
                Input components are interactive elements that allow users to
                provide information. These include text inputs, checkboxes,
                radio buttons, sliders, and file upload fields. They are
                essential in forms and user settings, enabling data collection
                and customization. A well-designed input component handles
                validation, displays feedback, and provides a seamless
                experience across different devices and screen readers, ensuring
                inclusivity and usability.
              </p>
              <a href="#">Explore more</a>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  width={640}
                  height={480}
                  className="size-full object-cover object-center"
                />
              </div>
              <h3>2. Navigation Components</h3>
              <p>
                Navigation components guide users through an application&apos;s
                structure. These include elements like top bars, side menus,
                breadcrumbs, tabs, and pagination. Effective navigation improves
                discoverability and helps users find the content they need
                without friction. Good navigation design considers user flow,
                accessibility (such as keyboard navigation and ARIA labels), and
                responsiveness, ensuring the interface is intuitive and adaptive
                to various screen sizes.
              </p>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt=""
                  width={640}
                  height={480}
                  className="size-full object-cover object-center"
                />
              </div>
              <h3>3. Feedback Components</h3>
              <p>
                Feedback components provide users with visual or textual cues in
                response to their actions. Examples include modals, toast
                notifications, progress bars, and tooltips. These elements
                inform users about the success or failure of their operations or
                alert them to required actions. They enhance interactivity and
                reduce confusion, especially when performing asynchronous
                actions like form submissions or file uploads.
              </p>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt=""
                  width={640}
                  height={480}
                  className="size-full object-cover object-center"
                />
              </div>
              <h3>4. Layout Components</h3>
              <p>
                Layout components organize content visually on the page. Common
                examples include containers, rows, columns, and grid systems.
                These components help define the structure of a page and control
                the spacing, alignment, and responsiveness of child elements. A
                strong layout system ensures consistency in visual hierarchy and
                supports scalability as the application grows in complexity.
              </p>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  alt=""
                  width={640}
                  height={480}
                  className="size-full object-cover object-center"
                />
              </div>
              <h2 id="heading-3" className="scroll-mt-24">
                End Paragraph
              </h2>
              <p>
                Mastering the use of UI components is a key step toward building
                reliable, scalable, and aesthetically consistent web
                applications. By breaking down interfaces into smaller parts,
                developers can achieve greater flexibility, encourage reuse, and
                reduce the likelihood of errors. UI components also bridge the
                gap between design and development, creating a more
                collaborative and efficient workflow that benefits both
                developers and end users.
              </p>
            </div>

            {/* Conclusion - REMOVED (já está no conteúdo do post) */}

            {/* Author */}
            {post.author && (
              <div className="bg-muted flex flex-col gap-4 rounded-lg p-5">
                <Author author={author} />
                {author.description && <p>{author.description}</p>}
                <div className="flex items-center gap-2.5">
                  {author.socials.map((link, index) => (
                    <Button asChild key={`author-socials-${index}`} size="icon">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Author = ({ author }: { author: AuthorType }) => {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-12 border">
        <AvatarImage src={author.image} alt={author.name} />
        <AvatarFallback>{author.name}</AvatarFallback>
      </Avatar>
      <div>
        <div className="text-sm font-normal leading-normal">{author.name}</div>
        <div className="text-muted-foreground text-sm font-normal leading-normal">
          {author.job}
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
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { Blogpost6 };
