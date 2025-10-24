"use client";
import AppMenu from "@/svgs/app-menu";
import Bitcoin from "@/svgs/bitcoin";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "Blog", href: "/" },
    { title: "Guides", href: "/" },
    { title: "Pricing", href: "/" },
  ];
  return (
    <div className="relative z-50 mx-2 md:pt-1">
      <div className="fixed left-[50%] mx-auto flex w-full -translate-x-[50%] items-center justify-between border-b border-neutral-800 px-4 py-1 md:max-w-3xl md:rounded-full md:border">
        <div className="flex items-center">
          <Bitcoin className="h-13 w-13 rounded-full fill-neutral-200 p-2" />
        </div>

          <div className="hidden items-center gap-3 md:flex">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="text-lg text-neutral-400 transition-colors duration-300 hover:text-neutral-100"
              >
                {link.title}
              </Link>
            ))}

            <button className="relative cursor-pointer rounded-full border border-neutral-800 px-4 py-1 text-base transition-colors duration-300 hover:bg-neutral-200 hover:text-neutral-800">
              Join Waitlist
              <span className="absolute inset-x-0 -bottom-px h-px rounded-full bg-[linear-gradient(to_right,transparent_25%,rgb(229_229_229)_50%,transparent_75%)] duration-300" />
            </button>
          </div>

        <button onClick={() => setOpen(!open)} className="block md:hidden">
          <AppMenu />
        </button>
      </div>

      {open && (
        <div className="absolute top-16 w-full rounded-lg border border-neutral-400 bg-neutral-800 px-4 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="text-base text-neutral-400 transition-colors duration-300 hover:text-neutral-100"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href={"/"}
              className="text-base text-neutral-400 transition-colors duration-300 hover:text-neutral-100"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
