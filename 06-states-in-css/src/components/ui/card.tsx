import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-solid-background p-4", className)}>{children}</div>
  );
};

export const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>{children}</div>
  );
};

export const CardSkeleton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-72 h-full w-full rounded-lg bg-solid-background my-4 overflow-hidden",
        "bg-[radial-gradient(var(--color-accent)_1px,transparent_1px)]",
        "bg-size-[10px_10px]",
        "md:mask-radial-from-50% mask-radial-from-90%",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-medium text-lg tracking-tight", className)}>
      {children}
    </h2>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base text-muted-foreground", className)}>
      {children}
    </p>
  );
};
