"use client";

import { MoonIcon, SunDimIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={handleThemeChange}
        className="bg-secondary text-secondary-foreground p-2 rounded-xl cursor-pointer transition-all duration-300"
      >
        {theme === "dark" ? (
          <SunDimIcon className="size-5" />
        ) : (
          <MoonIcon className="size-5" />
        )}
      </button>
    </div>
  );
}
