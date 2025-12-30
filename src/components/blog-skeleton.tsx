import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`bg-gray-200 rounded relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
    </div>
  );
};

export const BlogCardSkeleton = () => {
  return (
    <Card className="size-full rounded-lg border py-0">
      <CardContent className="p-0">
        {/* Category skeleton */}
        <div className="border-b p-2.5">
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Image skeleton */}
        <AspectRatio ratio={1.520833333} className="overflow-hidden">
          <Skeleton className="size-full" />
        </AspectRatio>

        {/* Content skeleton */}
        <div className="flex w-full flex-col gap-5 p-5">
          {/* Title skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>

          {/* Summary skeleton */}
          <div className="w-full max-w-[20rem] space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          {/* Button skeleton */}
          <Skeleton className="h-9 w-28" />
        </div>
      </CardContent>
    </Card>
  );
};

export const BlogSectionSkeleton = () => {
  return (
    <section className="pb-32">
      {/* Hero Section Skeleton */}
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10 flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col justify-between gap-12">
            <div className="flex w-full max-w-[36rem] flex-col gap-8">
              {/* Breadcrumb skeleton */}
              <Skeleton className="h-5 w-20" />

              {/* Title skeleton */}
              <div className="flex w-full flex-col gap-5">
                <div className="space-y-3">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-4/5" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured post skeleton */}
          <div className="w-full max-w-[27.5rem]">
            <BlogCardSkeleton />
          </div>
        </div>
      </div>

      {/* Posts Grid Skeleton */}
      <div className="py-20">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10 flex flex-col gap-8">
          {/* Section title skeleton */}
          <Skeleton className="h-10 w-64" />

          {/* Filter skeleton */}
          <div className="flex gap-2.5">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-full" />
            ))}
          </div>

          {/* Posts grid skeleton */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
