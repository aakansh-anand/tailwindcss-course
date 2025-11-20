import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CardContainer() {
  return (
    <div
      className={cn(
        "max-w-4xl w-full mx-auto bg-neutral-50 dark:bg-neutral-950 min-h-100 rounded-xl",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] bg-size-[10px_10px]",
        "dark:bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)] bg-size-[10px_10px]",
        "p-10 flex flex-col items-center justify-center group"
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-shadow-lg text-shadow-neutral-400 dark:text-shadow-neutral-600">
        Aakansh in Ghibli
      </h2>
      <p
        className={cn(
          "text-sm tracking-tight leading-5 text-center",
          "bg-linear-to-b from-neutral-800 via-neutral-600 to-neutral-400 bg-clip-text text-transparent",
          "dark:from-neutral-200 via-neutral-300 to-neutral-500",
          "max-w-md mt-2 mb-8"
        )}
      >
        The Ghibli trend, popularized by ChatGPT AI, transforms user photos into
        enchanting Studio Ghibli-style animations, blending AI creativity with
        beloved art. This captivating fusion allows individuals to reimagine
        themselves or their pets within the whimsical and serene landscapes
        characteristic of Hayao {`Miyazaki's `}masterpieces, creating
        personalized digital art that resonates with fans worldwide.
      </p>
      <div
        className={cn(
          "size-60 bg-secondary rounded-lg border border-neutral-300 dark:border-neutral-700",
          "bg-[radial-gradient(var(--color-neutral-400)_0.5px,transparent_1px)] bg-size-[10px_10px]",
          "dark:bg-[radial-gradient(var(--color-neutral-600)_0.5px,transparent_1px)] bg-size-[10px_10px]",
          "shadow-2xl shadow-neutral-300 dark:shadow-neutral-900 relative perspective-distant"
        )}
      >
        <Image
          src="/images/aakansh.jpg"
          alt="avatar"
          fill
          className={cn(
            "object-cover object-top rounded-lg",
            "rotate-x-30 -rotate-y-20 rotate-z-20 scale-120 transform transition-transform duration-300",
            "group-hover:scale-100 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0"
          )}
        />
      </div>
    </div>
  );
}
