import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold transition-all duration-200 ease-out-expo active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(0,71,255,0.45)]",
        primary: "bg-surface text-ink border border-border hover:bg-secondary hover:-translate-y-0.5",
        outline: "border border-accent/40 bg-transparent text-accent hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(0,71,255,0.35)]",
        ghost: "bg-transparent text-ink hover:text-accent",
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[40px] px-5 text-sm",
        lg: "h-[52px] px-8 text-sm uppercase tracking-[2px]",
        xl: "h-[60px] px-9 text-base",
        // icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants };

