"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function isCurrentPage(href: string) {
    return href === "/projects" && pathname.startsWith("/projects");
  }

  return (
    <header className="site-header">
      <div className="nav shell">
        <Link
          className="monogram"
          href="/"
          aria-label="Vimbisai Basvi home"
          onClick={() => setMenuOpen(false)}
        >
          VB
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              aria-current={isCurrentPage(item.href) ? "page" : undefined}
            >
              {isCurrentPage(item.href) && (
                <span className="active-dot" aria-hidden="true" />
              )}

              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="button desktop-resume"
          href="/vimbisai-basvi-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
          <ArrowRight size={15} />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>

          {menuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="mobile-nav shell"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              aria-current={isCurrentPage(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            className="mobile-resume"
            href="/vimbisai-basvi-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            View résumé
            <ArrowRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}