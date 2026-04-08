"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/experience", label: "experience" },
] as const;

const MENU_ID = "mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg-primary"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 border-b bg-bg-primary transition-colors duration-200 ${
          scrolled || menuOpen ? "border-border" : "border-transparent"
        }`}
      >
        <nav aria-label="Main navigation" className="mx-auto max-w-5xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Moniker */}
            <Link
              href="/"
              aria-label="Home"
              className="font-display text-2xl font-extrabold tracking-tight text-text-primary transition-colors duration-150 hover:text-accent"
            >
              SS
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-8 md:flex">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`relative font-mono text-sm lowercase tracking-wide transition-colors duration-150 ${
                        active
                          ? "text-accent"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-0.5 bg-accent transition-all duration-200 ${
                          active ? "right-0" : "right-full"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile toggle — 44px min touch target */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-text-secondary transition-colors duration-150 hover:text-text-primary md:hidden"
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          id={MENU_ID}
          role="region"
          aria-label="Mobile navigation"
          className={`grid transition-[grid-template-rows] duration-200 ease-out md:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-6 border-t border-border" />
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-4">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`flex h-12 items-center font-mono text-sm lowercase tracking-wide transition-colors duration-150 ${
                        active
                          ? "text-accent"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {active && (
                        <span className="mr-2 text-accent" aria-hidden="true">
                          &gt;
                        </span>
                      )}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
