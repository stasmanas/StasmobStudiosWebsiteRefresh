import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { studio } from "@/data/studio";
import { Wordmark } from "./wordmark";

const navItems = [
  { to: "/work", label: "Work" },
  { to: "/studio", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <Wordmark />

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "group relative font-mono text-[11px] uppercase tracking-[0.2em] transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-1.5 rounded-sm border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-border bg-background md:hidden">
          <div className="shell flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between border-b border-border/70 py-4 font-display text-3xl",
                    isActive ? "text-accent" : "text-foreground",
                  )
                }
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4" />
              </NavLink>
            ))}
            <div className="pt-5">
              <a
                href={`mailto:${studio.contacts.email}`}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {studio.contacts.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="mt-24 border-t border-border">
    <div className="shell py-14">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {studio.tagline} Built in Vilnius since {studio.founded}.
          </p>
          <a
            href={`mailto:${studio.contacts.email}`}
            className="mt-6 inline-flex items-center gap-2 font-display text-2xl text-foreground transition-colors hover:text-accent"
          >
            {studio.contacts.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {[{ to: "/", label: "Home" }, ...navItems].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Studio</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
            {studio.contacts.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a
              href={`tel:${studio.contacts.phoneHref}`}
              className="mt-3 block transition-colors hover:text-foreground"
            >
              {studio.contacts.phone}
            </a>
          </address>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {studio.name}
        </span>
        <span>{studio.claim}</span>
      </div>
    </div>
  </footer>
);

interface SiteLayoutProps {
  children: ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
