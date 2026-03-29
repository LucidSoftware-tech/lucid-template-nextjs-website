import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Avatar = forwardRef(({ className, src, fallback, size = "md", ...props }, ref) => {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt="Avatar" className="aspect-square h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground uppercase">
          {fallback || "U"}
        </div>
      )}
    </div>
  );
});
Avatar.displayName = "Avatar";
