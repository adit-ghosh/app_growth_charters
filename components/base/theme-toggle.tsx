"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="w-10 h-10 rounded-full" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 rounded-full hover:bg-primary/10 flex items-center justify-center transition-all duration-300 border border-border hover:border-primary/50 relative group"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-primary rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 text-primary rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Subtle glow effect on hover */}
      <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
