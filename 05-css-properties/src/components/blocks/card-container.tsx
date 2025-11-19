import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function CardContainer() {
  return (
    <div
      className={cn(
        "max-w-4xl w-full mx-auto bg-neutral-50 dark:bg-neutral-950 h-100 rounded-xl",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] bg-size-[10px_10px]",
        "dark:bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)] bg-size-[10px_10px]",
        "p-10 flex items-center justify-center"
      )}
    >
      <div
        className={cn(
          "size-60 bg-secondary rounded-lg border border-neutral-300 dark:border-neutral-700",
          "bg-[radial-gradient(var(--color-neutral-300)_0.5px,transparent_1px)] bg-size-[10px_10px]",
          "dark:bg-[radial-gradient(var(--color-neutral-700)_0.5px,transparent_1px)] bg-size-[10px_10px]",
          "shadow-2xl shadow-neutral-300 dark:shadow-neutral-900 relative overflow-hidden"
        )}
      >
        <Image
          src="/images/aakansh.jpg"
          alt="avatar"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
