import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  gap?: number;
}

export function DotPattern({
  className,
  dotSize = 1,
  dotColor = "#B7A6FF",
  gap = 20,
}: DotPatternProps) {
  const patternId = `dot-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={dotSize} cy={dotSize} r={dotSize} fill={dotColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
