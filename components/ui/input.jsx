import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-lg border border-border focus:border-accent font-light bg-surface/60 px-4 py-5 text-base text-ink placeholder:text-muted outline-none transition-colors duration-200 focus:ring-2 focus:ring-accent/20",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input };

