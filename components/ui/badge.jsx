import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-border bg-surface/60 text-muted",
        accent: "border-accent/40 bg-accent/10 text-accent",
        placeholder: "border-border bg-transparent text-muted/70 italic normal-case tracking-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <span ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />
  );
});
Badge.displayName = "Badge";

export { Badge, badgeVariants };
