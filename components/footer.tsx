import { Copyright } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex-none mt-20">
      <div className="sm:px-8">
        <div className="w-full lg:px-8">
          <div className="border-t border-zinc-100 py-8 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 font-mono">
                    <Link
                      href="/about"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      About
                    </Link>
                    <Link
                      href="/projects"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/articles"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      Articles
                    </Link>
                    <Link
                      href="/contact"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      Contact
                    </Link>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-500 flex items-center gap-2">
                    <Copyright className="size-5" /> {new Date().getFullYear()}{" "}
                    Daniel Okpara. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
