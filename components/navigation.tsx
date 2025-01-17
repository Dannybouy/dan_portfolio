"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const routes = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/articles",
    label: "Articles",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copyText, setCopyText] = useState("Copy");
  const [mounted, setMounted] = useState(false);

  const email = "danielokpara29@gmail.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
  };

  return (
    <>
      {mounted && (
        <section className="w-full border-b py-3 flex gap-4 justify-center">
          <div className="flex gap-4 justify-center items-center">
            <p className="text-[13px] md:text-sm">{email}</p>
            <Button
              variant="outline"
              onClick={handleEmailCopy}
              className="font-mono"
            >
              {copyText}
            </Button>
          </div>
          <Link
            href="https://drive.google.com/file/d/1cVcHBqf1zbY8FqBqZbqzTAmz7nCL5HGV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="font-mono">
              CV
            </Button>
          </Link>
        </section>
      )}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <h2 className="font-semibold text-lg">daniel</h2>
              </Link>
            </div>
            <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80 relative py-1 font-mono",
                    pathname === route.href
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-teal-400"
                      : "text-foreground/60 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-400"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden py-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "block px-4 py-2 text-sm font-medium",
                  pathname === route.href
                    ? "text-foreground bg-accent"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export default Navigation;
