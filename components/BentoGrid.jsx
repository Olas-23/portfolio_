import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

// Literal className lookup — Tailwind's JIT scanner needs full class strings,
// so a `col-span-${n}` interpolation would silently produce no span at build time.
const SPAN_CLASSES = {
  default: "md:col-span-1 xl:col-span-1",
  wide: "md:col-span-2 xl:col-span-2",
  tall: "md:col-span-1 xl:col-span-1 xl:row-span-2",
  feature: "md:col-span-2 xl:col-span-2 xl:row-span-2",
};

const BentoCard = ({ children, className, size = "default", as: Wrapper = "div", ...rest }) => {
  return (
    <Wrapper
      className={cn(
        "glass rounded-2xl p-6 xl:p-8 flex flex-col justify-between transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,14,31,0.08)]",
        SPAN_CLASSES[size],
        className
      )}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export { BentoCard, BentoGrid };
